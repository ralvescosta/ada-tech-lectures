import { IBooksRepository } from "../interfaces";
import { Request, Response } from "express";
import { Logger } from "winston";
import { NewBook } from "../models";

export class UpdateBooksController {
  constructor(
    private readonly logger: Logger,
    private readonly booksRepository: IBooksRepository,
  ) {}

  public async update(req: Request<any, any, NewBook>, res: Response): Promise<void> {
    const { id } = req.params
    const body = req.body

    try {
      await this.booksRepository.update(id, body)
      const book = await this.booksRepository.getById(id)
      res.status(200).json(book)
      return
    }catch(err){ 
      this.logger.error({ message: 'error to update book', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }
}