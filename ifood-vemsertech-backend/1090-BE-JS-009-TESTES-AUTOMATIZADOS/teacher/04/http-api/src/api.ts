import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { Routes } from './routes'
import { CreateCarsController } from './controllers/create_cars_controller';
import { CarsRepository } from './repositories/cars_repository';
import { ReadCarsController } from './controllers/read_cars_controller';

export class Api {
  private _app: Application

  public setup() {
    this._app = express()

    this._app.use(express.json())
    this._app.use(helmet())
    this._app.use(cors())

    const carsRepository = new CarsRepository()
    const createCarsController = new CreateCarsController(carsRepository)
    const readCarsController = new ReadCarsController(carsRepository)

    this._app.use(Routes({ createCarsController, readCarsController }))
  }

  public run() {
    this._app.listen(3000, () => console.log('running'))
  }

  get app() {
    return this._app
  }
}