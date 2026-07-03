import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  environment: import.meta.env.PUBLIC_VERCEL_ENV,
  release: import.meta.env.PUBLIC_VERCEL_GIT_COMMIT_SHA,
  enableLogs: true,
  tracesSampleRate: 1,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});
