# wizeline-assesment-api

This repository contains the code for my technical assesment for the wizeline go bootcamp. The main goal is to write a REST API in TypeScript using ExpressJS for the app middleware and routing, RapidAPI for third party data fetching and Mocha in the testing side of things.  

## Onboarding

### Running:

1. From a second terminal, run `npm run watch` in the project directory.
2. Now in the primary terminal, run `npm run dev`. This script uses `nodemon` to listen to transpilation changes from `tsc` in watch mode.

### Testing: 

Run `npm run test` to run the unit tests. For this, we are using the `mocha` library. 

## Routes

The app uses express to handle all the middleware and routing, these are the available routes:

- `/` <b>GET:</b> Prints `Hello World!`.
- `/stock` <b>GET:</b>  Sends a JSON response with information related to a random stock from an array of tickers. The response contains the following format:

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