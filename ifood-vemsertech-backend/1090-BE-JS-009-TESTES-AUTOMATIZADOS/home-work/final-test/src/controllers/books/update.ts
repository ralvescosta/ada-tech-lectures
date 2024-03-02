import { IBooksRepository } from "../interfaces";
import { Request, Response } from "express";

export class UpdateBooksController {
  constructor(private readonly booksRepository: IBooksRepository) {}

  public async update(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}