export type Person = {
  id: string;
  name: string;
  birth_date: string;
  email: string;
}

export interface IPeopleRepository {
  create(): Promise<Person>
  listAll(): Promise<Person[]>;
}