import { Router }  from 'express'
import { CreateCarsController } from './controllers/create_cars_controller'

type Args = {
  createCarsController: CreateCarsController
}

export function Routes({ createCarsController }: Args) {
  const routes = Router()

  routes.post('/cars', createCarsController.create.bind(createCarsController))

  return routes
}