export type Person = {
  id: string;
  name: string;
  birth_date: string;
  email: string;
}

export type NewPerson = Omit<Person, 'id'>;

export interface IPersonsRepository {
  create(newPerson: Person): Promise<Person>
  listAll(): Promise<Person[]>;
}

export interface IPersonsService {
  createNewPerson(newPerson: NewPerson): Promise<Person>
  listAllPersons(): Promise<Person[]>
}