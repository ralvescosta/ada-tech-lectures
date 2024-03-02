import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { Routes } from './routes'
import { CreateCarsController } from './controllers/create_cars_controller';
import { CarsRepository } from './repositories/cars_repository';

;(() => {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  const carsRepository = new CarsRepository()
  const createCarsController = new CreateCarsController(carsRepository)

  app.use(Routes({ createCarsController }))

  app.listen(3000, () => console.log('running'))
})()