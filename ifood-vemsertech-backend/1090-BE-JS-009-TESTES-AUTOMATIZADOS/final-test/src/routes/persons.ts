import { Router } from 'express'
import { PersonsController } from '../controllers/persons'

export const PersonsRoutes = (personsController: PersonsController): Router => {
  const router = Router()

  router.post('/persons', personsController.create.bind(personsController))
  router.get('/persons', personsController.listAll.bind(personsController))

  return router
}