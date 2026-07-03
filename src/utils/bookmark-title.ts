// Fetches a page's title (og:title preferred) with a persistent file cache,
// so each URL is only fetched once across dev reloads and builds.
// Cache lives in node_modules/.cache/bookmark-titles.json — delete it to refetch.
// Failed fetches are cached too (as ''), so a blocked/slow site doesn't stall
// every dev reload; the caller falls back to showing the domain.

import fs from 'node:fs';
import path from 'node:path';

const CACHE_FILE = path.join(
    process.cwd(),
    'node_modules',
    '.cache',
    'bookmark-titles.json',
);

let cache: Record<string, string> | null = null;
const pending = new Map<string, Promise<string>>();

function loadCache(): Record<string, string> {
    if (!cache) {
        try {
            cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
        } catch {
            cache = {};
        }
    }
    return cache!;
}

function saveCache(): void {
    try {
        fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    } catch {}
}

// Decode the handful of HTML entities common in titles.
function decodeEntities(s: string): string {
    return s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#0?39;|&apos;/g, "'")
        .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));
}

async function fetchTitle(href: string): Promise<string> {
    try {
        const res = await fetch(href, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SnailSeikeijukuBot/1.0)' },
            signal: AbortSignal.timeout(2500),
        });
        if (!res.ok) return '';

        // Titles live in <head>, so stream the body and stop at </head>
        // (or a 64 KB cap for malformed pages) instead of downloading it all.
        let html = '';
        if (res.body) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            while (html.length < 64 * 1024) {
                const { done, value } = await reader.read();
                if (done) break;
                html += decoder.decode(value, { stream: true });
                if (/<\/head[\s>]/i.test(html)) break;
            }
            await reader.cancel().catch(() => {});
        } else {
            html = await res.text();
        }

        const og = html.match(
            /<meta[^>]+(?:property|name)=["']og:title["'][^>]*content=["']([^"']+)["']/i,
        ) ?? html.match(
            /<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["']og:title["']/i,
        );
        const tag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        return decodeEntities((og?.[1] ?? tag?.[1] ?? '').trim());
    } catch {
        return '';
    }
}

export async function getBookmarkTitle(href: string): Promise<string> {
    const c = loadCache();
    if (href in c) return c[href];

    // Dedupe concurrent requests for the same URL within one process.
    let p = pending.get(href);
    if (!p) {
        p = fetchTitle(href).then((title) => {
            c[href] = title;
            saveCache();
            pending.delete(href);
            return title;
        });
        pending.set(href, p);
    }
    return p;
}
