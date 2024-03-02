import { NewCar, Car } from "../models/cars";
import { CarsModel } from '../db/models/cars'
import { ICarRepository } from "./interfaces";
import {Request, Response} from 'express'

class CreateCarController {
  constructor(private readonly carRepository: ICarRepository) {}

  public async create(req: Request<any, any, NewCar>, res: Response) {
    const newCar = req.body;

    const carWithTheSameName = await this.carRepository.findByName(newCar.name)
    if(carWithTheSameName) {
      return res.status(409).json({ message: 'car with the provided name already created' })
    }

    const car = await this.carRepository.create(newCar)

    return res.status(201).json(car)
  }
}

export { CreateCarController }