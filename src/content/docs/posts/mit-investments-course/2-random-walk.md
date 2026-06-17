---
title: 第二講：證券、華爾街的隨機漫步
description: 本課程將涵蓋以下五個主題
---


15.433 INVESTMENTS — Class 2: Securities, Random Walk on Wall Street
# 15.433 投資學 — 第二講：證券、華爾街的隨機漫步

**EN**
Reto R. Gallati — MIT Sloan School of Management — Spring 2003 — February 5th 2003

**中文**
Reto R. Gallati — 麻省理工學院史隆管理學院（MIT Sloan）— 2003 年春季 — 2003 年 2 月 5 日

---

## Outline / 課程大綱

**EN**

Probability Theory
- A brief review of probability distributions
- Evaluating random events with normals.
- Large surprises and normal distributions.

Statistical Data Analysis
- Empirical distributions. Sample statistics.
- The precision of sample statistics.

Summary

Questions for Next Class

**中文**

機率理論
- 機率分布的簡要回顧
- 用常態分布來評估隨機事件。
- 大型意外事件與常態分布。

統計資料分析
- 實證分布。樣本統計量。
- 樣本統計量的精確度。

總結

下一堂課的問題

---

## What makes an event random / 是什麼讓一個事件成為隨機

**EN**
- Flipping a Coin
- Forecasting tomorrow's temperature

**中文**
- 擲硬幣
- 預測明天的氣溫

---

## Probability Distributions / 機率分布

**EN**

Mathematical tools for random events. It has two components: outcomes and their likelihood.

Examples:
- Binomial Distribution

$$\widetilde{X} = \begin{cases} 0 & \text{with probability } p \\ 1 & \text{with probability } 1-p \end{cases}$$

- Standard Normal Distribution

Figure 1: Normal distribution, Source: RiskMetrics™ Technical Document, p. 69. (Standard normal PDF, peaking at about 0.40; with percentile markers at −1.28 = 10th percentile, −1.65 = 5th percentile, −2.33 = 1st percentile.)

- 1 standard deviation → 68.26% probability
- 2 standard deviations → 95.54% probability
- 3 standard deviations → 99.74% probability

**中文**

用於處理隨機事件的數學工具。它有兩個組成部分：各種結果以及它們發生的可能性。

例子：
- 二項分布

$$\widetilde{X} = \begin{cases} 0 & \text{機率為 } p \\ 1 & \text{機率為 } 1-p \end{cases}$$

- 標準常態分布

圖 1：常態分布，來源：RiskMetrics™ 技術文件，第 69 頁。（標準常態機率密度函數 PDF，峰值約為 0.40；圖中標示百分位數：−1.28 為第 10 百分位、−1.65 為第 5 百分位、−2.33 為第 1 百分位。）

- 1 個標準差 → 68.26% 的機率
- 2 個標準差 → 95.54% 的機率
- 3 個標準差 → 99.74% 的機率

---

## Figures 2 & 3 / 圖 2 與圖 3

**EN**

Figure 2: Normal distribution, Source: CreditMetrics™ Technical Document, p. 70. (Standard normal PDF with a 5% lower tail marked at −1.65 standard deviations.)

Figure 3: Normal distribution, Source: CreditMetrics™ Technical Document, p. 37. (A distribution of firm value, showing a "default threshold" and the "default scenarios" lying in the lower tail, ranging from lower to higher firm value.)

**中文**

圖 2：常態分布，來源：CreditMetrics™ 技術文件，第 70 頁。（標準常態 PDF，在 −1.65 個標準差處標示出 5% 的左尾。）

圖 3：常態分布，來源：CreditMetrics™ 技術文件，第 37 頁。（公司價值的分布，標示出「違約門檻（default threshold）」，以及落在左尾、屬於「違約情境（default scenarios）」的區域，橫軸由較低的公司價值延伸到較高的公司價值。）

---

## A Digression to History / 歷史的一段插曲

**EN**

In his 1900 dissertation on "The Theory of Speculation," Louis Bachelier searched for "a formula which expresses the likelihood of a market fluctuation." He ended up with a mathematical formula that describes the Brownian Motion.

In the finance world, Brownian Motion came to be called the random walk, once described as the path a drunk might follow at night in the light of a lamp post.

Using the geometric Brownian motion to describe the random fluctuations in stock prices, Fisher Black, Myron Scholes, and Bob Merton worked out the Black-Scholes option pricing formula.

This work was done in the spring of 1970, when both Merton and Scholes were at MIT Sloan!

**中文**

在他 1900 年的博士論文〈投機理論（The Theory of Speculation）〉中，Louis Bachelier 試圖尋找「一個能表達市場波動可能性的公式」。最終他得到了一個描述布朗運動（Brownian Motion）的數學公式。

在金融界，布朗運動後來被稱為「隨機漫步（random walk）」，曾被形容為一個醉漢在夜裡借著路燈燈光所走出的路徑。

Fisher Black、Myron Scholes 與 Bob Merton 運用幾何布朗運動來描述股價的隨機波動，進而推導出 Black-Scholes 選擇權定價公式。

這項研究是在 1970 年春天完成的，當時 Merton 與 Scholes 兩人都在 MIT Sloan！

---

## Model of the Behavior of Stock Prices — Wiener Processes / 股價行為的模型 — 維納過程

**EN**

The change ∆z during a small period of time ∆t is:

$$\Delta z = \varepsilon \sqrt{\Delta t} \quad (1)$$

where ε is a random drawing from a standardized normal distribution N(0,1). The values of ∆z for any two different short intervals of time ∆t are independent.

It follows from the first property that ∆z itself has a normal distribution with:
- mean of ∆z = 0  (2)
- standard deviation of ∆z = √∆t  (3)
- variance of ∆z = ∆t  (4)

The second property implies that z follows a Markov process.

Consider the increase in the value of z during a relatively long period of time T. This can be denoted by z(T) − z(0). It can be regarded as the sum of the increases in z in N small time intervals of length ∆t, where

$$N = \frac{T}{\Delta t} \quad (5)$$

Thus

$$z(T) - z(0) = \sum_{i=1}^{N} \varepsilon_i \sqrt{\Delta t} \quad (6)$$

where the εᵢ (1, 2, ..., N) are random drawings from N(0,1).

> **Footnote on the Markov process:** A Markov process is a particular type of stochastic process where only the present value of a variable is relevant for predicting the future. The past history of the variable and the way that the present has emerged from the past are irrelevant. Stock prices are usually assumed to follow a Markov process. Suppose that the price of IBM stock is $100 now. If the stock price follows a Markov process, our predictions should be unaffected by the price one week ago, one month ago, or one year ago. The only relevant piece of information is that the price is now $100. Predictions for the future are uncertain and must be expressed in terms of probability distributions. The Markov property implies that the probability distribution of the price at any particular future time is not dependent on the particular path followed by the price in the past. The Markov property of stock prices is consistent with the weak form of market efficiency. This states that the present price of a stock impounds all the information contained in a record of past prices. If the weak form of market efficiency were not true, technical analysts could make above-average returns by interpreting charts of the past history of stock prices. There is very little evidence that they are, in fact, able to do this. Statistical properties of the stock price history of IBM may be useful in determining the characteristics of the stochastic process followed by the stock price (e.g. its volatility). The point being made here is that the particular path followed by the stock in the past is irrelevant.

**中文**

在一小段時間 ∆t 內，z 的變化量為：

$$\Delta z = \varepsilon \sqrt{\Delta t} \quad (1)$$

其中 ε 是從標準化常態分布 N(0,1) 中抽取的隨機值。對於任意兩段不同的短時間區間 ∆t，其對應的 ∆z 值彼此獨立。

由第一個性質可推得，∆z 本身服從常態分布，且：
- ∆z 的平均值 = 0  (2)
- ∆z 的標準差 = √∆t  (3)
- ∆z 的變異數 = ∆t  (4)

第二個性質意味著 z 服從一個馬可夫過程（Markov process）。

考慮在一段相對較長的時間 T 內 z 值的增量，可記為 z(T) − z(0)。它可被視為 z 在 N 個長度為 ∆t 的小時間區間內各個增量的總和，其中

$$N = \frac{T}{\Delta t} \quad (5)$$

因此

$$z(T) - z(0) = \sum_{i=1}^{N} \varepsilon_i \sqrt{\Delta t} \quad (6)$$

其中 εᵢ（i = 1, 2, ..., N）為從 N(0,1) 中抽取的隨機值。

> **關於馬可夫過程的註腳：** 馬可夫過程是一種特殊類型的隨機過程，其中只有變數的「現值」與預測未來相關。該變數過去的歷史，以及現在是如何從過去演變而來，都是不相關的。一般假設股價服從馬可夫過程。假設 IBM 股票現價為 100 美元。若股價服從馬可夫過程，則我們的預測不應受到一週前、一個月前或一年前股價的影響。唯一相關的資訊就是現價為 100 美元。對未來的預測是不確定的，必須以機率分布來表達。馬可夫性質意味著，未來任一特定時點的價格機率分布，並不取決於價格過去所走過的特定路徑。股價的馬可夫性質與「弱式市場效率（weak form of market efficiency）」一致。弱式效率指出，股票的現價已吸納（impound）了過去價格紀錄中所含的所有資訊。若弱式市場效率不成立，技術分析師就能透過解讀過去股價歷史的圖表而獲得高於平均的報酬。但幾乎沒有證據顯示他們實際上能做到這一點。IBM 股價歷史的統計性質，或許有助於判斷股價所服從之隨機過程的特性（例如其波動率）。此處要強調的重點是：股票過去所走過的特定路徑是不相關的。

---

## Discretization Figures / 離散化圖示

**EN**

- Figure 3: Relatively large value of ∆t.
- Figure 4: Small value of ∆t.
- Figure 5: The true process obtained as ∆t → 0.

(These illustrate how, as the time step ∆t shrinks toward zero, the discrete approximation of the path of z converges to the true continuous process.)

**中文**

- 圖 3：∆t 取相對較大的值。
- 圖 4：∆t 取較小的值。
- 圖 5：當 ∆t → 0 時所得到的真實過程。

（這些圖說明：當時間步長 ∆t 縮小趨近於零時，z 路徑的離散近似會收斂到真實的連續過程。）

---

## Properties and the Generalized Wiener Process / 性質與廣義維納過程

**EN**

From the second property of Wiener processes, the εᵢ's are independent of each other; it follows from equation 6 that z(T) − z(0) is normally distributed with
- mean of [z(T) − z(0)] = 0  (7)
- standard deviation of [z(T) − z(0)] = √∆t  (8)
- variance of [z(T) − z(0)] = ∆t  (9)

This is consistent with the discussion earlier in this section.

**Generalized Wiener Process**

The basic Wiener process, dz, that has been developed so far has a drift rate of zero and a variance rate of 1.0. The drift rate of zero means that the expected value of z at any future time is equal to its current value. The variance rate of 1.0 means that the variance of the change in z in a time interval of length T equals T. A generalized Wiener process for a variable x can be defined in terms of dz as follows:

$$dx = a\,dt + b\,dz \quad (10)$$

where a and b are constants.

To understand equation 10, it is useful to consider the two components on the right-hand side separately. The a dt term implies that x has an expected drift rate of a per unit of time. Without the b dz term, the equation is

$$dx = a\,dt \quad (11)$$

which implies that

$$\frac{dx}{dt} = a \quad (12)$$

or

$$x = x_0 + a\,t \quad (13)$$

where x₀ is the value of x at time zero. In a period of time of length T, x increases by an amount aT. The b dz term on the right-hand side of equation 10 can be regarded as adding noise or variability to the path followed by x. The amount of this noise or variability is b times a Wiener process. A Wiener process has a standard deviation of 1.0. It follows that b times a Wiener process has a standard deviation of b. In a small time interval ∆t, the change in value of x, ∆x, is — from equations 1 and 10 — given by

$$\Delta x = a\,\Delta t + b\,\varepsilon \sqrt{\Delta t} \quad (14)$$

**中文**

由維納過程的第二個性質可知，各 εᵢ 彼此獨立；由式 (6) 可推得 z(T) − z(0) 服從常態分布，且
- [z(T) − z(0)] 的平均值 = 0  (7)
- [z(T) − z(0)] 的標準差 = √∆t  (8)
- [z(T) − z(0)] 的變異數 = ∆t  (9)

這與本節稍早的討論一致。

**廣義維納過程**

目前所建構的基本維納過程 dz，其漂移率（drift rate）為零、變異率（variance rate）為 1.0。漂移率為零，表示 z 在任一未來時點的期望值都等於其現值。變異率為 1.0，表示 z 在長度為 T 的時間區間內變化量的變異數等於 T。針對變數 x 的廣義維納過程，可用 dz 定義如下：

$$dx = a\,dt + b\,dz \quad (10)$$

其中 a 與 b 為常數。

要理解式 (10)，可分別考慮右側的兩個部分會很有幫助。a dt 這一項表示 x 的期望漂移率為每單位時間 a。若沒有 b dz 這一項，方程式為

$$dx = a\,dt \quad (11)$$

這意味著

$$\frac{dx}{dt} = a \quad (12)$$

或

$$x = x_0 + a\,t \quad (13)$$

其中 x₀ 為 x 在時點零的值。在長度為 T 的一段時間內，x 增加 aT。式 (10) 右側的 b dz 項可視為對 x 所走的路徑加入雜訊或變異性。此雜訊或變異性的大小為 b 乘上一個維納過程。維納過程的標準差為 1.0，因此 b 乘上維納過程的標準差為 b。在一小段時間區間 ∆t 內，x 的變化量 ∆x，由式 (1) 與式 (10) 可得：

$$\Delta x = a\,\Delta t + b\,\varepsilon \sqrt{\Delta t} \quad (14)$$

---

## Distribution of ∆x / ∆x 的分布

**EN**

where, as before, ε is a random drawing from a standardized normal distribution. Thus ∆x has a normal distribution with
- mean of ∆x = a∆t  (15)
- standard deviation of ∆x = b√∆t  (16)
- variance of ∆x = b²∆t  (17)

Similar arguments to those given for a Wiener process show that the change in the value of x in any time interval T is normally distributed with
- mean of ∆x = aT  (18)
- standard deviation of ∆x = b√T  (19)
- variance of ∆x = b²T  (20)

Figure 6: Wiener processes. (Compares, over time, the basic Wiener process dz, the deterministic line dx = a dt, and the generalized Wiener process dx = a dt + b dz.)

Thus, the generalized Wiener process given in equation 10 has an expected drift rate (i.e. average drift per unit of time) of a and a variance rate (i.e. variance per unit of time) of b². It is illustrated in Figure 6.

**中文**

其中 ε（如前所述）為從標準化常態分布中抽取的隨機值。因此 ∆x 服從常態分布，且
- ∆x 的平均值 = a∆t  (15)
- ∆x 的標準差 = b√∆t  (16)
- ∆x 的變異數 = b²∆t  (17)

以類似於維納過程的論證可知，x 在任一時間區間 T 內的變化量服從常態分布，且
- ∆x 的平均值 = aT  (18)
- ∆x 的標準差 = b√T  (19)
- ∆x 的變異數 = b²T  (20)

圖 6：維納過程。（沿時間比較基本維納過程 dz、確定性的直線 dx = a dt，以及廣義維納過程 dx = a dt + b dz。）

因此，式 (10) 所給出的廣義維納過程具有期望漂移率（即每單位時間的平均漂移）a，以及變異率（即每單位時間的變異數）b²。如圖 6 所示。

---

## Process for Stock Prices / 股價的過程

**EN**

It is tempting to suggest that a stock price follows a generalized Wiener process; that is, that it has a constant expected drift rate and a constant variance rate. However, this model fails to capture a key aspect of stock prices. This is that the expected percentage return required by investors from a stock is independent of the stock price. If investors require a 14% per annum expected return when the stock price is $10, then ceteris paribus, they will also require a 14% per annum expected return when it is $50. Clearly, the constant expected drift-rate assumption is inappropriate and needs to be replaced by the assumption that the expected return (that is, expected drift divided by the stock price) is constant. If S is the stock price at time t, the expected drift rate in S should be assumed to be µS for some constant parameter, µ. This means that in a short interval of time, ∆t, the expected increase in S is µS∆t. The parameter µ is the expected rate of return on the stock, expressed in decimal form.

If the volatility of the stock price is always zero, this model implies that

$$\Delta S = \mu S \Delta t \quad (21)$$

in the limit as ∆t → 0

$$dS = \mu S\,dt \quad (22)$$

or

$$\frac{dS}{S} = \mu\,dt \quad (23)$$

so that

$$S_T = S_0 e^{\mu T} \quad (24)$$

where S₀ and Sₜ are the stock price at time zero and time T. Equation 24 shows that when the variance rate is zero, the stock price grows at a continuously compounded rate of µ per unit of time.

In practice, of course, a stock price does exhibit volatility. A reasonable assumption is that the variability of the percentage return in a short period of time, ∆t, is the same regardless of the stock price. In other words, an investor is just as uncertain of the percentage return when the stock price is $50 as when it is $10. This suggests that the standard deviation of the change in a short period of time ∆t should be proportional to the stock price and leads to the model

$$dS = \mu S\,dt + \sigma S\,dz \quad (25)$$

or

$$\frac{dS}{S} = \mu\,dt + \sigma\,dz. \quad (26)$$

**中文**

人們很容易直覺認為股價服從廣義維納過程；也就是說，股價具有固定的期望漂移率與固定的變異率。然而，這個模型未能捕捉股價的一個關鍵面向：投資人對某檔股票所要求的期望百分比報酬，與股價水準無關。若股價為 10 美元時投資人要求年化 14% 的期望報酬，那麼在其他條件不變下，當股價為 50 美元時他們同樣會要求年化 14% 的期望報酬。顯然，「固定期望漂移率」的假設並不恰當，必須改為「期望報酬（即期望漂移除以股價）為固定」的假設。若 S 為時點 t 的股價，則 S 的期望漂移率應假設為 µS，其中 µ 為某個固定參數。這表示在一小段時間 ∆t 內，S 的期望增量為 µS∆t。參數 µ 為股票的期望報酬率，以小數形式表示。

若股價的波動率永遠為零，則此模型意味著

$$\Delta S = \mu S \Delta t \quad (21)$$

在 ∆t → 0 的極限下

$$dS = \mu S\,dt \quad (22)$$

或

$$\frac{dS}{S} = \mu\,dt \quad (23)$$

於是

$$S_T = S_0 e^{\mu T} \quad (24)$$

其中 S₀ 與 Sₜ 分別為時點零與時點 T 的股價。式 (24) 顯示，當變異率為零時，股價以每單位時間 µ 的連續複利率成長。

當然，實務上股價確實會呈現波動。一個合理的假設是：在一小段時間 ∆t 內，百分比報酬的變異性與股價水準無關、保持相同。換言之，當股價為 50 美元時，投資人對百分比報酬的不確定程度，與股價為 10 美元時相同。這意味著一小段時間 ∆t 內變化量的標準差應與股價成正比，從而導出以下模型

$$dS = \mu S\,dt + \sigma S\,dz \quad (25)$$

或

$$\frac{dS}{S} = \mu\,dt + \sigma\,dz. \quad (26)$$

---

## The Most Widely Used Model / 最廣泛使用的模型

**EN**

Equation 26 is the most widely used model of stock price behavior. The variable σ is the volatility of the stock price. The variable µ is its expected rate of return.

The discrete-time version of the model is

$$\frac{\Delta S}{S} = \mu \Delta t + \sigma \varepsilon \sqrt{\Delta t} \quad (27)$$

$$\Delta S = \mu S \Delta t + \sigma S \varepsilon \sqrt{\Delta t} \quad (28)$$

The variable ∆S is the change in the stock price, S, in a small interval of time, ∆t, and ε is a random drawing from a standardized normal distribution (i.e. normal distribution with a mean of zero and standard deviation of 1.0). The parameter µ is the expected rate of return per unit of time from the stock, and the parameter σ is the volatility of the stock price. Both of these parameters are assumed constant.

The left-hand side of equation 27 is the return provided by the stock in a short period of time, ∆t. The term µ∆t is the expected value of this return, and the term σε√∆t is the stochastic component of the return. The variance of the stochastic component (and therefore, of the whole return) is σ²∆t. This is consistent with the definition of the volatility, σ. That is, σ is such that σ√∆t is the standard deviation of the return in a short time period, ∆t.

Equation 27 shows that ∆S/S is normally distributed with mean µ∆t and standard deviation σ√∆t. In other words,

$$\frac{\Delta S}{S} \approx N\left(\mu \Delta t,\ \sigma \sqrt{\Delta t}\right) \quad (29)$$

**中文**

式 (26) 是最廣泛使用的股價行為模型。變數 σ 為股價的波動率，變數 µ 為其期望報酬率。

此模型的離散時間版本為

$$\frac{\Delta S}{S} = \mu \Delta t + \sigma \varepsilon \sqrt{\Delta t} \quad (27)$$

$$\Delta S = \mu S \Delta t + \sigma S \varepsilon \sqrt{\Delta t} \quad (28)$$

變數 ∆S 為股價 S 在一小段時間 ∆t 內的變化量，ε 為從標準化常態分布（即平均為零、標準差為 1.0 的常態分布）中抽取的隨機值。參數 µ 為股票每單位時間的期望報酬率，參數 σ 為股價的波動率。這兩個參數皆假設為固定。

式 (27) 的左側是股票在一小段時間 ∆t 內所提供的報酬。µ∆t 這一項是該報酬的期望值，而 σε√∆t 這一項則是報酬的隨機成分。此隨機成分（因而也是整體報酬）的變異數為 σ²∆t。這與波動率 σ 的定義一致。也就是說，σ 滿足：σ√∆t 為一小段時間 ∆t 內報酬的標準差。

式 (27) 顯示 ∆S/S 服從常態分布，平均為 µ∆t、標準差為 σ√∆t。換言之，

$$\frac{\Delta S}{S} \approx N\left(\mu \Delta t,\ \sigma \sqrt{\Delta t}\right) \quad (29)$$

---

## Why Normals? / 為什麼用常態分布？

**EN**

Model the random fluctuation of stock prices using geometric Brownian motion. Implication for stock returns: normal distribution (for continuously compounded returns).

The annualized stock return is normal with mean (µ) and standard deviation (σ). For the S&P 500 index returns, µ is roughly 12%, and σ is roughly 15%. The latter is also called volatility.

Fix a time horizon, say ∆t. The stock return over ∆t is normally distributed with mean µ∆t and standard deviation σ√∆t. What is the distribution of daily returns?

**中文**

用幾何布朗運動來建模股價的隨機波動。對股票報酬的意涵是：（連續複利報酬）服從常態分布。

年化股票報酬服從常態分布，平均為 µ、標準差為 σ。以 S&P 500 指數的報酬而言，µ 約為 12%，σ 約為 15%。後者也稱為波動率。

固定一個時間期間，例如 ∆t。在 ∆t 內的股票報酬服從常態分布，平均為 µ∆t、標準差為 σ√∆t。那麼每日報酬的分布是什麼？

---

## Events that are not Normal / 不符合常態分布的事件

**EN**

A negative surprise: on October 19, 1987, the S&P 500 index dropped more than 23% on one day.

A positive surprise: on January 3, 2001, the Nasdaq composite index gained more than 14% on one day.

Suppose we use a normal distribution to characterize daily stock returns. What are the probabilities of such surprises?

Figure 4: Nasdaq, Dec 1 to Jan 18 2001 — jumps on January 2nd and 3rd. (The Nasdaq composite index level rises sharply around early January 2001.)

**中文**

一個負面意外：1987 年 10 月 19 日，S&P 500 指數單日下跌超過 23%。

一個正面意外：2001 年 1 月 3 日，那斯達克綜合指數單日上漲超過 14%。

假設我們用常態分布來描述每日股票報酬。那麼這類意外事件發生的機率是多少？

圖 4：那斯達克指數，2000 年 12 月 1 日至 2001 年 1 月 18 日 —— 在 1 月 2 日與 3 日出現跳升。（那斯達克綜合指數水準在 2001 年 1 月初急遽上升。）

---

## The Probability of a Crash / 崩盤的機率

**EN**

Let r denote the daily return, which is:
- normally distributed
- mean 0.12 / 252 = 0.00048
- standard deviation 0.15 / √252 = 0.0094

What is the probability of an '87 crash? Prob(r < −0.23) = ?

- First, convert r to a standard normal:

$$X = \frac{r - 0.00048}{0.0094} \quad (30)$$

- Second, convert the critical value for r to that for X:

$$\frac{-0.23 - 0.00048}{0.0094} \approx -23 \quad (31)$$

- Finally, knowing that X is a standard normal:

$$\text{Prob}(X < -23) = N(-23) = 10^{-127}! \quad (32)$$

**中文**

令 r 表示每日報酬，其為：
- 服從常態分布
- 平均為 0.12 / 252 = 0.00048
- 標準差為 0.15 / √252 = 0.0094

那麼出現像 1987 年那樣崩盤的機率是多少？Prob(r < −0.23) = ?

- 首先，將 r 轉換為標準常態變數：

$$X = \frac{r - 0.00048}{0.0094} \quad (30)$$

- 其次，將 r 的臨界值轉換為 X 的臨界值：

$$\frac{-0.23 - 0.00048}{0.0094} \approx -23 \quad (31)$$

- 最後，已知 X 為標準常態變數：

$$\text{Prob}(X < -23) = N(-23) = 10^{-127}! \quad (32)$$

（譯註：原講義列出標準差為 0.15·√252；依崩盤機率約為 10⁻¹²⁷ 的結論回推，此處應為日波動率 0.15/√252 ≈ 0.0094 才能與標準化後的臨界值約 −23 相符。）

---

## What Normal Fails to Capture... / 常態分布無法捕捉的部分……

**EN**

There are large movements (both up and down) in stock prices that cannot be captured at all by the normal distribution.

In mathematical terms, the tail distribution of a normal random variable is too thin. Historical stock returns exhibit fat tails.

If we make financial decisions based on the normal distribution, we will miss out on the large movements. The consequences are catastrophic!

This is especially important for leveraged investments over a short time horizon.

Tail fatness is also an important issue in risk management.

**中文**

股價中存在一些大幅波動（無論上漲或下跌），是常態分布完全無法捕捉的。

以數學語言來說，常態隨機變數的尾部分布太薄（too thin）。而歷史上的股票報酬呈現出厚尾（fat tails）。

如果我們根據常態分布來做金融決策，就會忽略這些大幅波動。其後果是災難性的！

對於在短時間內進行的槓桿投資而言，這一點尤其重要。

尾部的厚薄程度（tail fatness）在風險管理中也是一個重要議題。

---

## Data Analysis / 資料分析

**EN**

Figure 7: S&P 500 and Nasdaq Index, index points, source: Bloomberg Professional. (Index levels of SPX and CCMP from June 1985 through 2001.)

Figure 8: S&P 500 returns, source: Bloomberg Professional. (Weekly log returns of SPX, ranging roughly between −40% and +40%, with the largest negative spike around the October 1987 crash.)

**中文**

圖 7：S&P 500 與那斯達克指數，以指數點數表示，來源：Bloomberg Professional。（SPX 與 CCMP 自 1985 年 6 月至 2001 年的指數水準。）

圖 8：S&P 500 報酬，來源：Bloomberg Professional。（SPX 的每週對數報酬，大致介於 −40% 與 +40% 之間，最大的負向尖峰出現在 1987 年 10 月崩盤前後。）

---

## Return Distribution Chart / 報酬分布圖

**EN**

(A chart plotting probability against daily returns over the range −0.080 to +0.080, comparing the current/empirical distribution against the normal distribution.)

**中文**

（一張以機率對每日報酬作圖的圖表，橫軸範圍為 −0.080 至 +0.080，將目前的（實證）分布與常態分布相比較。）

---

## Preliminaries for Data Analysis / 資料分析的前置作業

**EN**

When given the "raw data," first look for trends. If there are any, the first step is always to de-trend the data.

Why?

The i.i.d. assumption for r₁, r₂, ..., r_N: returns are independent and identically distributed.

The longer we observe, the more we know about the probability distribution... but do not forget structural changes!

**中文**

拿到「原始資料（raw data）」時，首先要找出趨勢。若存在趨勢，第一步永遠是先將資料去趨勢（de-trend）。

為什麼？

對 r₁, r₂, ..., r_N 的 i.i.d. 假設：各報酬彼此獨立且服從相同分布（independent and identically distributed）。

我們觀察得愈久，對機率分布的了解就愈多……但別忘了結構性變化（structural changes）！

---

## Empirical Distribution / 實證分布

**EN**

1. Sort the outcomes r₁, r₂, ..., r_N.
2. Denote the minimum by x and the maximum by x̄. Divide [x, x̄] evenly into K bins:
   - bin 1: [x, x + ∆x]
   - bin 2: [x + ∆x, x + 2∆x]
   - ...
   - bin K: [x̄ − ∆x, x̄]
   - where ∆x = (x̄ − x) / K
3. Fixing a number K, count the number Nₖ of the rᵢ's that fall into the k-th bin.
4. Repeating this for k = 1, 2, ..., K, we get a list of bins and their respective "likelihood" Nₖ.
5. Finally, we need to renormalize the likelihood so that the probability of rᵢ falling into [x, x̄] is one.

Figure 10: Daily return distribution of S&P 500 index. Source: Bloomberg Professional.

**中文**

1. 將各結果 r₁, r₂, ..., r_N 排序。
2. 以 x 表示最小值、x̄ 表示最大值。將 [x, x̄] 平均分成 K 個區間（bins）：
   - 第 1 個區間：[x, x + ∆x]
   - 第 2 個區間：[x + ∆x, x + 2∆x]
   - ……
   - 第 K 個區間：[x̄ − ∆x, x̄]
   - 其中 ∆x = (x̄ − x) / K
3. 固定一個數字 K，計算落入第 k 個區間的 rᵢ 個數 Nₖ。
4. 對 k = 1, 2, ..., K 重複此步驟，便得到一份各區間及其各自「可能性（likelihood）」Nₖ 的清單。
5. 最後，需要將這些可能性重新正規化（renormalize），使 rᵢ 落入 [x, x̄] 的機率為 1。

圖 10：S&P 500 指數的每日報酬分布。來源：Bloomberg Professional。

---

## Fat Tails / 厚尾

**EN**

Figure 11: Left fat tail of the daily return distribution of the S&P 500 index — the leftmost 5% of the distribution.

Figure 12: Right fat tail of the daily return distribution of the S&P 500 index — the rightmost 5% of the distribution.

(Both compare the empirical distribution against the normal distribution and show that the actual distribution has more probability mass in the tails than the normal would predict.)

**中文**

圖 11：S&P 500 指數每日報酬分布的左側厚尾 —— 分布最左側的 5%。

圖 12：S&P 500 指數每日報酬分布的右側厚尾 —— 分布最右側的 5%。

（兩張圖皆將實證分布與常態分布相比較，顯示實際分布在尾部所含的機率質量比常態分布所預測的更多。）

---

## Sample Statistics / 樣本統計量

**EN**

mean:

$$\mu = \frac{1}{N} \sum_{i=1}^{N} r_i \quad (33)$$

variance:

$$\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^2 \quad (34)$$

skewness (lack of symmetry):

$$\text{skew} = \frac{\frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^3}{\sqrt{\sigma^3}} \quad (35)$$

kurtosis (peakedness):

$$\text{kurt} = \frac{\frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^4}{\sigma^2} \quad (36)$$

**中文**

平均數：

$$\mu = \frac{1}{N} \sum_{i=1}^{N} r_i \quad (33)$$

變異數：

$$\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^2 \quad (34)$$

偏態（不對稱程度，skewness）：

$$\text{skew} = \frac{\frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^3}{\sqrt{\sigma^3}} \quad (35)$$

峰態（尖峰程度，kurtosis）：

$$\text{kurt} = \frac{\frac{1}{N} \sum_{i=1}^{N} (r_i - \mu)^4}{\sigma^2} \quad (36)$$

---

## Standard Errors / 標準誤

**EN**

Take the sample mean µ as an example:

mean: µ = (1/N) Σ rᵢ

We know that the rᵢ's are random draws from a stationary (and ergodic) distribution. In fact, to simplify our analysis, we assumed that they are i.i.d.

This implies that the sample mean µ is itself a random variable.
- What is its mean?
- What is its standard deviation?

Standard errors: measure the precision of the estimators.

> **Footnote — ergodic:** Of, pertaining to, or possessing the property that in the limit all points in a space are covered with equal frequency, or that each sufficiently large selection of points is equally representative of the whole. [Oxford English Dictionary]

**中文**

以樣本平均數 µ 為例：

平均數：µ = (1/N) Σ rᵢ

我們知道各 rᵢ 是從一個定態（stationary，且具遍歷性 ergodic）的分布中抽取的隨機值。事實上，為簡化分析，我們假設它們是 i.i.d.。

這意味著樣本平均數 µ 本身就是一個隨機變數。
- 它的平均值是多少？
- 它的標準差是多少？

標準誤（standard errors）：用來衡量估計量的精確度。

> **註腳 —— 遍歷性（ergodic）：** 指具有以下性質：在極限下，空間中所有的點都以相同的頻率被覆蓋；或者說，任何足夠大的點集選取，都同等地具有對整體的代表性。〔出自《牛津英語詞典》〕

---

## Conditional Version / 條件版本

**EN**

So far, we assumed that the distribution of stock returns stays the same throughout history. We calculate the sample statistics as if history repeats itself with the same probability law.

But we know that this cannot be true. How do we use the data when we have reasons to believe that the probability law changes over time?

For example, suppose we believe that the daily returns within each month t are normally distributed with mean µₜ and standard deviation σₜ, which vary over time t.

The simplest way to take the conditional information into account is to calculate the sample mean and standard deviation month by month.

**中文**

到目前為止，我們都假設股票報酬的分布在整段歷史中維持不變。我們在計算樣本統計量時，彷彿歷史會以相同的機率法則不斷重演。

但我們知道這不可能成立。當我們有理由相信機率法則會隨時間改變時，該如何運用資料？

例如，假設我們認為每個月份 t 內的每日報酬服從常態分布，平均為 µₜ、標準差為 σₜ，而這兩者會隨時間 t 而變化。

要納入這種條件性資訊，最簡單的方式就是逐月計算樣本平均數與標準差。

---

## Time Series Patterns / 時間序列型態

**EN**

While the unconditional version of sample statistics gives us a static picture of daily stock returns, the conditional version provides more dynamic information. For example,
- The conditional expected returns are time varying, but there is not much persistence.
- The conditional volatilities are also time varying. Moreover, they seem to be highly persistent.
- There is a negative relationship between returns and volatility: when the market goes down, the volatility goes up.

We will revisit these issues in more detail in Class 9.

**中文**

無條件版本的樣本統計量提供的是每日股票報酬的靜態圖像，而條件版本則提供更具動態性的資訊。例如：
- 條件期望報酬會隨時間變動，但並沒有太強的持續性（persistence）。
- 條件波動率也會隨時間變動。此外，它們似乎具有高度的持續性。
- 報酬與波動率之間存在負向關係：當市場下跌時，波動率會上升。

我們將在第 9 講中更詳細地重新探討這些議題。

---

## 🔶Summary / 總結

**EN**

We use probability distributions to characterize and evaluate random events.

There is a long tradition of using normal distributions to characterize the fluctuations in stock prices.

The normal distributions, however, are not adequate to capture large surprises.

The empirical distribution and sample moments are useful statistical tools to extract information from the data. Stationarity is one important assumption.

The precision of the sample moments can be measured by their standard errors.

The sample statistics can be used in both unconditional and conditional versions. The conditional version provides more dynamic information about the data.

Focus:
- BKM Chapters 3 & 5 (Chapter 3: This is all general stuff; you need to know the basic things like IPO, private placements, secondary market etc.);
- p. 137 (probability distribution, standard deviation);
- p. 141 (figure 5.4);
- p. 149 bottom and 150 (continuous compounding);

Reader: Fama (1995).

Type of potential questions: Chapter 3 concept check questions 2 & 3, p. 98 ff. questions 2, 5, 11, 17, 22; Chapter 5, p. 146 ff. questions 10, 12, 15.

**中文**

我們使用機率分布來描述與評估隨機事件。

長久以來，學界一直有用常態分布來描述股價波動的傳統。

然而，常態分布並不足以捕捉大型的意外事件。

實證分布與樣本動差（sample moments）是從資料中萃取資訊的有用統計工具。定態性（stationarity）是其中一個重要假設。

樣本動差的精確度可用其標準誤來衡量。

樣本統計量可分為無條件與條件兩種版本來使用。條件版本能提供關於資料的更具動態性的資訊。

重點：
- BKM 第 3 與第 5 章（第 3 章：都是一般性的內容；你需要了解像首次公開發行 IPO、私募（private placements）、次級市場（secondary market）等基本概念）；
- 第 137 頁（機率分布、標準差）；
- 第 141 頁（圖 5.4）；
- 第 149 頁下半部與第 150 頁（連續複利）；

讀本：Fama (1995)。

可能出題類型：第 3 章觀念檢核（concept check）第 2、3 題；第 98 頁起的第 2、5、11、17、22 題；第 5 章第 146 頁起的第 10、12、15 題。

---

## Questions for Next Class / 下一堂課的問題

**EN**

Please read:
- BKM Chapters 6 and 7,
- Elton and Gruber (2000), and
- Kritzman (1992).

Think about the following questions:
- Two important components in making an investment decision: the investment opportunity and the investor.
- Admittedly, one investor may differ from another. And the investment opportunity does not stay constant across space or time.
- If you were asked to build a model of investments for a generic investor in a generic market environment, what are the basic features you would include in your model?

**中文**

請閱讀：
- BKM 第 6 與第 7 章，
- Elton 與 Gruber (2000)，以及
- Kritzman (1992)。

思考以下問題：
- 做投資決策時的兩個重要組成部分：投資機會與投資人。
- 誠然，不同投資人之間可能各不相同。而投資機會也不會跨越空間或時間維持不變。
- 如果要你針對「一般性市場環境下的一般性投資人」建立一個投資模型，你會在模型中納入哪些基本要素？
