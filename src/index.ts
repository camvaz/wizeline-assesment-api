import express from 'express'

import homeHandler from './handlers/home.handler'
import stockHandler from './handlers/stock.handler'

export const createApp = () => {
  const app = express()
  app.get('/', homeHandler)
  app.get('/stock', stockHandler)
  return app
}

if (process.env.NODE_ENV !== 'test') {
  const app = createApp() 
  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
}
