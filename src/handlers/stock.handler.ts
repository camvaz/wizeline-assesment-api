import { Request, Response } from 'express'
import axios, { Method } from 'axios'

export default (req: Request, res: Response) => {
  const YAHOO_RAPIDAPI_KEY = process.env.YAHOO_RAPIDAPI_KEY
  const ticker = req.params.ticker
  const options = {
    method: 'GET' as Method,
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics',
    params: { symbol: ticker, region: 'US' },
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
