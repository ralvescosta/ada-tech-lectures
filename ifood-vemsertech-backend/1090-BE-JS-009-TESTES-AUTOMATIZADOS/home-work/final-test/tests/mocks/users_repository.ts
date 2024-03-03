import { IUsersRepository } from "../../src/controllers/interfaces";
import { NewUser, User } from "../../src/controllers/models";

export const usersRepositoryMock: IUsersRepository = {
  create: (newUser: NewUser): Promise<User> => jest.fn as any,
  getById: (id: string): Promise<User | undefined> => jest.fn as any,
  getByEmail: (email: string): Promise<User | undefined> => jest.fn as any
}