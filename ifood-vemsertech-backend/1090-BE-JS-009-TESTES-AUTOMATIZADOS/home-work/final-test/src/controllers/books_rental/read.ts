import { IBooksRentalRepository } from "../interfaces";
import { Request, Response } from "express";

export class ReadBooksRentalController {
  constructor(private readonly booksRentalRepository: IBooksRentalRepository) {}

  public async getById(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }

  public async list(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}