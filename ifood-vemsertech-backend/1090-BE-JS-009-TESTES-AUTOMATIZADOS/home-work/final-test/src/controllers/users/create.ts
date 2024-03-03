import { IUsersRepository } from "../interfaces";
import { Request, Response } from "express";
import { NewUser } from "../models";
import { Logger } from "winston";

export class CreateUsersController {
  constructor(
    private readonly logger: Logger,
    private readonly usersRepository: IUsersRepository
  ) {}

  public async create(req: Request<any, any, NewUser>, res: Response): Promise<void> {
    const body = req.body

    try {
      const alreadyCreated = await this.usersRepository.getByEmail(body.email)
      if(alreadyCreated){
        this.logger.warn({ message: 'duplicated user', email: body.email })
        res.status(409).json({ message: 'user with the same email already existe' })
        return
      }

      const user = await this.usersRepository.create(body)
      res.status(201).json(user)
      return
    }catch(err) {
      this.logger.error({ message: 'error to create user', email: body.email, error: err })
      res.status(500).json({ message: 'something went wrong, try again latter!' })
      return   
    }
  }
}