import { IUsersRepository } from "../interfaces";
import { Request, Response } from "express";

export class CreateUsersController {
  constructor(private readonly usersRepository: IUsersRepository) {}

  public async create(req: Request, res: Response): Promise<void> {
    res.status(201).send()
  }
}