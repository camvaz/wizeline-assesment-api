# wizeline-assesment-api

<div style="display:flex;align:center;">
    <img src="https://avatars.githubusercontent.com/u/6192875?s=200&v=4" width="24">
    <img src="https://secure.meetupstatic.com/photos/event/7/5/d/a/600_436110170.jpeg" width="24">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="24">
</div>
<br>

This repository contains the code for my technical assesment for the wizeline go bootcamp. The main goal is to write a REST API in TypeScript using ExpressJS for the app middleware and routing, RapidAPI for third party data fetching and Mocha in the testing side of things.  

## Onboarding

### Dev:

1. From a second terminal, run `npm run watch` in the project directory.
2. Now in the primary terminal, run `npm run dev`. This script uses `nodemon` to listen to transpilation changes from `tsc` in watch mode.

### Testing: 

Run `npm run test` to run the unit tests. For this, we are using the `mocha` library. 

## Routes

- `/` <b>GET:</b> Prints `Hello World!`.
- `/stock/:ticker` <b>GET:</b>  Sends a JSON response with information related to a specific stock by providing a ticker. The response contains the following format:

```
export interface Response {
    name:                    string;
    symbol:                  string;
    price:                   string;
    ebitdaMargins:           CurrentPrice;
    profitMargins:           CurrentPrice;
    grossMargins:            CurrentPrice;
    operatingCashflow:       Ebitda;
    revenueGrowth:           CurrentPrice;
    operatingMargins:        CurrentPrice;
    ebitda:                  Ebitda;
    targetLowPrice:          CurrentPrice;
    recommendationKey:       string;
    grossProfits:            Ebitda;
    freeCashflow:            Ebitda;
    targetMedianPrice:       CurrentPrice;
    currentPrice:            CurrentPrice;
    earningsGrowth:          CurrentPrice;
    currentRatio:            CurrentPrice;
    returnOnAssets:          CurrentPrice;
    numberOfAnalystOpinions: Ebitda;
    targetMeanPrice:         CurrentPrice;
    debtToEquity:            CurrentPrice;
    returnOnEquity:          CurrentPrice;
    targetHighPrice:         CurrentPrice;
    totalCash:               Ebitda;
    totalDebt:               Ebitda;
    totalRevenue:            Ebitda;
    totalCashPerShare:       CurrentPrice;
    financialCurrency:       string;
    maxAge:                  number;
    revenuePerShare:         CurrentPrice;
    quickRatio:              CurrentPrice;
    recommendationMean:      CurrentPrice;
}

export interface CurrentPrice {
    raw: number;
    fmt: string;
}

export interface Ebitda {
    raw:     number;
    fmt:     string;
    longFmt: string;
}
```
