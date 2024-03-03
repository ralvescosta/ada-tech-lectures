import { IUsersRepository } from "../interfaces";
import { Request, Response } from "express";
import { Logger } from "winston";

export class ReadUsersController {
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: IUsersRepository
  ) {}

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    try {
      const user = await this.usersRepository.getById(id)

      if(user)
        res.status(200).json(user)
      else
        res.status(204).send()

      return
    }catch(err){ 
      this.logger.error({ message: 'error to read user', error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return
    }
  }

  public async list(req: Request, res: Response): Promise<void> {
    res.status(501).send({ message: 'not implemented yet!' })
  }
}