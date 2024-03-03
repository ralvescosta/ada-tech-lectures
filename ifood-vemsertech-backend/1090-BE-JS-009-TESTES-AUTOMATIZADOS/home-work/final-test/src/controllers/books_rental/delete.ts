import { Request, Response } from "express";
import { IBooksRentalRepository } from "../interfaces";
import { Logger } from "winston";

export class DeleteBooksRentalController {
  constructor(
    private readonly logger: Logger,
    private readonly booksRentalRepository: IBooksRentalRepository
  ) {}

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    try {
      const booksRental = await this.booksRentalRepository.getById(id)
      if(!booksRental){
        res.status(409).json({ message: 'any book rental with the id provided was founded' })
        return
      }

      await this.booksRentalRepository.delete(id)
      res.status(200).send()
      return
    }catch(err){ 
      this.logger.error({ message: 'error to delete rental book', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }
}