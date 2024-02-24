import { IPersonsRepository, IPersonsService, NewPerson, Person } from "./interfaces";
import { v4 as uuidv4 } from 'uuid'

export class PersonsService implements IPersonsService {
  constructor(
    private readonly personRepository: IPersonsRepository
  ) {}

  public async createNewPerson(newPerson: NewPerson): Promise<Person> {
    const person = { 
      id: uuidv4(), 
      ...newPerson
    }

    return this.personRepository.create(person);
  }

 public async listAllPersons(): Promise<Person[]> {
    return this.personRepository.listAll()
  }
}