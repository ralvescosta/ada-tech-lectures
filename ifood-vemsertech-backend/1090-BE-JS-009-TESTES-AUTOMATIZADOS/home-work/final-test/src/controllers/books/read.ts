import { IBooksRepository } from "../interfaces";
import { Request, Response } from "express";
import { Logger } from "winston";

export class ReadBooksController {
  constructor(
    private readonly logger: Logger,
    private readonly booksRepository: IBooksRepository
  ) {}

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    try {
      const book = await this.booksRepository.getById(id)

      if(book)
        res.status(200).json(book)
      else
        res.status(204).send()

      return
    }catch(err){ 
      this.logger.error({ message: 'error to read book', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }

  public async list(req: Request, res: Response): Promise<void> {
    try {
      const book = await this.booksRepository.list()
      res.status(200).json(book)
      return
    }catch(err){ 
      this.logger.error({ message: 'error to read book', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }
}