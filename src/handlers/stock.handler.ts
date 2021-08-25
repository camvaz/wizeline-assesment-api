import { Request, Response } from 'express'
import axios, { Method } from 'axios'

const symbols = ['AAPL', 'AMZN', 'FB', 'GOOG', 'MSFT', 'TSLA']

export default (_req: Request, res: Response) => {
  const YAHOO_RAPIDAPI_KEY = process.env.YAHOO_RAPIDAPI_KEY
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
  const options = {
    method: 'GET' as Method,
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics',
    params: { symbol: randomSymbol, region: 'US' },
    headers: {
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      'x-rapidapi-key': YAHOO_RAPIDAPI_KEY,
    },
  }

  return axios
    .request(options)
    .then((response) => response.data)
    .then(
      ({
        symbol,
        price: { regularMarketPrice, currency },
        quoteType: { longName },
        financialData,
      }) => ({
        name: longName,
        symbol,
        price: `$${regularMarketPrice.fmt} ${currency}`,
        ...financialData,
      })
    )
    .then((data) => res.send(data))
    .catch((error) => {
      console.error('Error retreiving data from the Yahoo API', error)
      return res.status(500).send(error)
    })
}
