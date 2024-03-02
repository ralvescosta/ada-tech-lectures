import { Request, Response } from "express";
import { IBooksRentalRepository } from "../interfaces";

export class UpdateBooksRentalController {
  constructor(private readonly booksRentalRepository: IBooksRentalRepository) {}

  public async update(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}