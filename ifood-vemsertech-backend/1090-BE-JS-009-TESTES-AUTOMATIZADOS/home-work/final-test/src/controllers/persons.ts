import { Request, Response } from "express";
import { IPersonsService } from "../services/interfaces";

export class PersonsController {
  constructor(
    private readonly personsService: IPersonsService
  ) {}

  public async create(req: Request, res: Response) {
    const { body } = req;
    
    try {
      const person = await this.personsService.createNewPerson(body);
      return res.status(201).json(person)
    }catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'something went wrong, try latter!' })
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const persons = await this.personsService.listAllPersons();
      return  res.status(200).json(persons)
    }catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'something went wrong, try latter!' })
    }
  }
}