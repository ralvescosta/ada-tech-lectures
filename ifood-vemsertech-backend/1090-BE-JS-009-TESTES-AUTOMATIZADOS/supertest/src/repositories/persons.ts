import { IPersonsRepository, NewPerson, Person } from "../services/interfaces";
import { PersonModel } from '../db/models/Person'

export class PersonsRepository implements IPersonsRepository {
  public async create(newPerson: NewPerson): Promise<Person> {
    const person = await PersonModel.create(newPerson);

    return {
      id: person.dataValues.id,
      name: person.dataValues.name,
      email: person.dataValues.email,
      birth_date: person.dataValues.birth_date
    }
  }

  public async listAll(): Promise<Person[]> {
    const persons = await PersonModel.findAll();

    return persons.map(item => {
      return {
        id: item.dataValues.id,
        name: item.dataValues.name,
        email: item.dataValues.email,
        birth_date: item.dataValues.birth_date
      }
    })
  }
}