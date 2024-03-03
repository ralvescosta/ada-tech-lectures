import { IBooksRentalRepository } from "../interfaces";
import { Request, Response } from "express";
import { Logger } from "winston";

export class ReadBooksRentalController {
  constructor(
    private readonly logger: Logger,
    private readonly booksRentalRepository: IBooksRentalRepository
  ) {}

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    try {
      const rented = await this.booksRentalRepository.getById(id)
      res.status(200).json(rented)
      return
    }catch(err){ 
      this.logger.error({ message: 'error to read book rental' , error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }

  public async list(req: Request, res: Response): Promise<void> {
    try {
      const rentalList = await this.booksRentalRepository.list()
      res.status(200).json(rentalList)
      return
    }catch(err){ 
      this.logger.error({ message: 'error to read book rental', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }
}