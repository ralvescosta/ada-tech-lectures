import { Request, Response } from "express";
import { IBooksRepository } from "../interfaces";
import { Logger } from "winston";
import { NewBook } from "../models";

export class CreateBooksController {
  constructor(
    private readonly logger: Logger,
    private readonly booksRepository: IBooksRepository,
  ) {}

  public async create(req: Request<any, any, NewBook>, res: Response): Promise<void> {
    const body = req.body

    try {
      const alreadyCreated = await this.booksRepository.getByTitle(body.title)
      if(alreadyCreated){
        this.logger.warn({ message: 'duplicated book', email: body.title })
        res.status(409).json({ message: 'book with the same title already existe' })
        return
      }

      const book = await this.booksRepository.create(body)
      res.status(201).json(book)
      return
    }catch(err) {
      this.logger.error({ message: 'error to create book', email: body.title, error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return   
    }
  }
}