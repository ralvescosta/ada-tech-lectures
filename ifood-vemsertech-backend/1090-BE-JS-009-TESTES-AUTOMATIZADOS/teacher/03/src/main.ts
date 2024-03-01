import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { Routes } from './routes';

(() => {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  app.use(Routes())

  app.listen(3000, () => console.log('running'))
})()