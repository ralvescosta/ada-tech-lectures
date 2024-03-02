import { IBooksRepository } from "../interfaces";
import { Request, Response } from "express";

export class ReadBooksController {
  constructor(private readonly booksRepository: IBooksRepository) {}

  public async getById(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }

  public async list(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}