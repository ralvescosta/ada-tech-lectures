import { Request, Response } from "express";
import { IBooksRepository } from "../interfaces";

export class CreateBooksController {
  constructor(private readonly booksRepository: IBooksRepository) {}

  public async create(req: Request, res: Response): Promise<void> {
    res.status(201).send()
  }
}