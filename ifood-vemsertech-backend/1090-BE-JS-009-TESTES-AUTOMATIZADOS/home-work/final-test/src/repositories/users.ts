import { IUsersRepository } from '../controllers/interfaces';
import { NewUser, User } from '../controllers/models';
import { UsersModel } from '../db/models/Users'

export class UsersRepository implements IUsersRepository {
  public async create(newUser: NewUser): Promise<User> {
    const user = await UsersModel.create(newUser)
    return user.dataValues
  }
  
  public async getById(id: string): Promise<User | undefined> {
    const user = await UsersModel.findOne({ where: { id } })
    if(!user)
      return undefined

    return user.dataValues
  }
}