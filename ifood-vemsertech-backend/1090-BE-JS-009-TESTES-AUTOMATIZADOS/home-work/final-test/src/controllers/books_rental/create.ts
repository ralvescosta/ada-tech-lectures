import { Request, Response } from "express";
import { IBooksRentalRepository } from "../interfaces";

export class CreateBooksRentalController {
  constructor(private readonly booksRentalRepository: IBooksRentalRepository) {}

  public async create(req: Request, res: Response): Promise<void> {
    res.status(201).send()
  }
}