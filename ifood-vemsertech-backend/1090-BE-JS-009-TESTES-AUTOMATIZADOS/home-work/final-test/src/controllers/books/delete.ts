import { IBooksRepository } from "../interfaces";
import { Request, Response } from "express";

export class DeleteBooksController {
  constructor(private readonly booksRepository: IBooksRepository) {}

  public async delete(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}