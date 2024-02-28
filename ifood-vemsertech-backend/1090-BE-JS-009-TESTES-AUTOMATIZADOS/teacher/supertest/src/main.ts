const dotEnv = require("dotenv")
import express from 'express';
import cors from 'cors'
import helmet from 'helmet';
// !!!!!!!!! WARN !!!!!!!
// Instrutor Recommendation
// 
// OBS: Nao Utilizar essa Lib em aplicações no mundo real, apenas para side projects
// 
// 
import audit from 'express-requests-logger'

import { Routes } from './routes';

;(async ()=> {
  const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
  dotEnv.config({ path: envFile })

  console.log(envFile)

  const app = express();
  app.use(express.json());
  app.use(audit())
  app.use(helmet())
  app.use(cors())

  const { personsRoutes } = Routes()

  app.use(personsRoutes);

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log('Server started');
  });
})()