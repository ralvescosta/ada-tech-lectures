import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan'

import { Routes } from './routes';
import { BooksRepository } from './repositories/books';
import { UsersRepository } from './repositories/users';
import { BooksRentalRepository } from './repositories/books_rental';
import { CreateBooksController } from './controllers/books/create';
import { ReadBooksController } from './controllers/books/read';
import { UpdateBooksController } from './controllers/books/update';
import { DeleteBooksController } from './controllers/books/delete';
import { CreateUsersController } from './controllers/users/create';
import { ReadUsersController } from './controllers/users/read';
import { CreateBooksRentalController } from './controllers/books_rental/create';
import { ReadBooksRentalController } from './controllers/books_rental/read';
import { UpdateBooksRentalController } from './controllers/books_rental/update';
import { DeleteBooksRentalController } from './controllers/books_rental/delete';

;(async ()=> {
  const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
  dotenv.config({ path: envFile })

  const app = express();
  app.use(express.json());
  app.use(morgan("dev"))
  app.use(helmet())
  app.use(cors())

  const booksRepository = new BooksRepository()
  const usersRepository = new UsersRepository()
  const booksRentalRepository = new BooksRentalRepository()

  const createBooksController = new CreateBooksController(booksRepository)
  const readBooksController = new ReadBooksController(booksRepository)
  const updateBooksController = new UpdateBooksController(booksRepository)
  const deleteBooksController = new DeleteBooksController(booksRepository)

  const createUsersController = new CreateUsersController(usersRepository)
  const readUsersController = new ReadUsersController(usersRepository)

  const createBooksRentalController = new CreateBooksRentalController(booksRentalRepository)
  const readBooksRentalController = new ReadBooksRentalController(booksRentalRepository)
  const updateBooksRentalController = new UpdateBooksRentalController(booksRentalRepository)
  const deleteBooksRentalController = new DeleteBooksRentalController(booksRentalRepository)

  app.use( 
    Routes({
      createBooksController,
      readBooksController,
      updateBooksController,
      deleteBooksController,
      createUsersController,
      readUsersController,
      createBooksRentalController,
      readBooksRentalController,
      updateBooksRentalController,
      deleteBooksRentalController
    })
  );

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log('Server started');
  });
})()