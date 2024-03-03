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
      const book = await this.booksRepository.getById(id)
      if(!book){
        res.status(404).json({ message: 'any book with the id provided was founded' })
        return
      }

      if(body.title && body.title !== book.title) {
        const withTheSameTitle = await this.booksRepository.getByTitle(body.title)
        if(withTheSameTitle) {
          res.status(409).json({ message: 'there is already a book with the same title provided' })
          return
        }
      }

      await this.booksRepository.update(id, body)

      res.status(200).json({...book, ...body,})
      return
    }catch(err){ 
      this.logger.error({ message: 'error to update book', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }
}