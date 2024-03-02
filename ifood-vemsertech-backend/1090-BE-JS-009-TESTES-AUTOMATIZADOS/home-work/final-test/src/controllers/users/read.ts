import { IUsersRepository } from "../interfaces";
import { Request, Response } from "express";

export class ReadUsersController {
  constructor(private readonly usersRepository: IUsersRepository) {}

  public async getById(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }

  public async list(req: Request, res: Response): Promise<void> {
    res.status(200).send()
  }
}