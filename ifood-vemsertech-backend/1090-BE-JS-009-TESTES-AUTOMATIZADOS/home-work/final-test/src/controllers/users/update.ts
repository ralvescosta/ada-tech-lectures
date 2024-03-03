import { IUsersRepository } from "../interfaces";
import { Request, Response } from "express";
import { Logger } from "winston";

export class UpdateUsersController {
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: IUsersRepository
  ) {}

  public async update(req: Request, res: Response): Promise<void> {
    res.status(501).send({ message: 'not implemented yet!' })
  }
}