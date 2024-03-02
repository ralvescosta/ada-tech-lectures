import { Request, Response } from "express";
import { IBooksRentalRepository } from "../interfaces";

export class DeleteBooksRentalController {
  constructor(private readonly booksRentalRepository: IBooksRentalRepository) {}

  public async delete(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}