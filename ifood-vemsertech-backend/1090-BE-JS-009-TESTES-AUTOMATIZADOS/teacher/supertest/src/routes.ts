import { Router } from "express"
import { PersonsRepository } from "./repositories/persons"
import { PersonsService } from "./services/persons"
import { PersonsController } from "./controllers/persons"
import { PersonsRoutes } from "./routes/persons"

export const Routes = () => {
  const personsRepository = new PersonsRepository()
  const personsService = new PersonsService(personsRepository)

  const personsController = new PersonsController(personsService)
  
  const personsRoutes = PersonsRoutes(personsController)

  return {
    personsRoutes
  }
}