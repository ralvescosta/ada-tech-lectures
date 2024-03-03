import { Router } from "express"
import { CreateBooksController } from "./controllers/books/create"
import { ReadBooksController } from "./controllers/books/read"
import { UpdateBooksController } from "./controllers/books/update"
import { DeleteBooksController } from "./controllers/books/delete"
import { CreateUsersController } from "./controllers/users/create"
import { ReadUsersController } from "./controllers/users/read"
import { CreateBooksRentalController } from "./controllers/books_rental/create"
import { ReadBooksRentalController } from "./controllers/books_rental/read"
import { UpdateBooksRentalController } from "./controllers/books_rental/update"
import { DeleteBooksRentalController } from "./controllers/books_rental/delete"
import { UpdateUsersController } from "./controllers/users/update"

type Args = {
  createBooksController: CreateBooksController,
  readBooksController: ReadBooksController,
  updateBooksController: UpdateBooksController
  deleteBooksController: DeleteBooksController,

 createUsersController: CreateUsersController,
 readUsersController: ReadUsersController,
 updateUsersController: UpdateUsersController,

 createBooksRentalController: CreateBooksRentalController,
 readBooksRentalController: ReadBooksRentalController,
 updateBooksRentalController: UpdateBooksRentalController,
 deleteBooksRentalController: DeleteBooksRentalController
}

export const Routes = (args: Args) => {
  const routes = Router()

  routes.post('/v1/books', args.createBooksController.create.bind(args.createBooksController))
  routes.get('/v1/books', args.readBooksController.list.bind(args.readBooksController))
  routes.get('/v1/books/:id', args.readBooksController.getById.bind(args.readBooksController))
  routes.put('/v1/books/:id', args.updateBooksController.update.bind(args.updateBooksController))
  routes.delete('/v1/books/:id', args.deleteBooksController.delete.bind(args.deleteBooksController))

  routes.post('/v1/users', args.createUsersController.create.bind(args.createUsersController))
  routes.get('/v1/users/:id', args.readUsersController.getById.bind(args.readUsersController))
  routes.get('/v1/users', args.readUsersController.list.bind(args.readUsersController))
  routes.put('/v1/users/:id', args.updateUsersController.update.bind(args.updateUsersController))

  routes.post('/v1/rental/books', args.createBooksRentalController.create.bind(args.createBooksRentalController))
  routes.get('/v1/rental/books', args.readBooksRentalController.list.bind(args.readBooksRentalController))
  routes.get('/v1/rental/books/:id', args.readBooksRentalController.getById.bind(args.readBooksRentalController))
  routes.put('/v1/rental/books/:id', args.updateBooksRentalController.update.bind(args.updateBooksRentalController))
  routes.delete('/v1/rental/books/:id', args.deleteBooksRentalController.delete.bind(args.deleteBooksRentalController))

  return routes
}