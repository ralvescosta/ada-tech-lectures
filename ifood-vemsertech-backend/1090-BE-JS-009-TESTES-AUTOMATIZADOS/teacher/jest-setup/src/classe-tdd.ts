// Usar TDD para implementar esse Exemplo

type User = {
  id: string,
  username: string,
  email: string
}

type NewUser = Omit<User, 'id'>

export class UserRepository {
  private users: User[] = []

  public async create(newUser: NewUser): Promise<User> {
    const user = { id: '0', ...newUser };
    this.users.push(user)

    return user
  }  

  public async listUser(): Promise<User[]> {
    return this.users
  }
}

export class CreateUsers {
  private readonly repository = new UserRepository()

  public async create(user: NewUser): Promise<User> {
    return this.repository.create(user)  
  }

  public async listAllUsers(): Promise<User[]> {
    return this.repository.listUser()
  }
}