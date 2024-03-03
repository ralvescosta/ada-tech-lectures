import { Request, Response } from "express";
import { IBooksRentalRepository } from "../interfaces";
import { Logger } from "winston";
import { NewBooksRental } from "../models";

export class CreateBooksRentalController {
  constructor(
    private readonly logger: Logger, 
    private readonly booksRentalRepository: IBooksRentalRepository
  ) {}

  public async create(req: Request<any, any, NewBooksRental>, res: Response): Promise<void> {
    const body = req.body

    try {
      const bookAlreadyRented = await this.booksRentalRepository.getByBookId(body.book_id)
      if(bookAlreadyRented){
        this.logger.warn({ message: 'book already rented', book_id: body.book_id })
        res.status(409).json({ message: 'book already rented' })
        return
      }

      const rented = await this.booksRentalRepository.create(body)
      res.status(201).json(rented)
      return
    }catch(err) {
      this.logger.error({ message: 'error to rente a book',  book_id: body.book_id, error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return   
    }
  }
}