import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'

import { setupMongo } from './database'
import { errorHandler } from './middlewares/error-handler.middleware'
import { routes } from './routes'

const app = express()
const port = parseInt(process.env.PORT || '4000')
const corsOptions = {
  origin: 'https://dev-bill-frontend.vercel.app',
  credentials: true
}

setupMongo().then(() => {
  app.use(cors(corsOptions))
  app.use(json())
  app.use(routes)
  app.use(errorHandler)

  app.listen(port, '0.0.0.0', () => {
    console.log(`APP is running at port ${port}`)
  })
})

export default app
