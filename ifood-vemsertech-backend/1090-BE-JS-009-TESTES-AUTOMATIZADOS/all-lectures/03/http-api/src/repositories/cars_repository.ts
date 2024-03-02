import { ICarsRepository } from "../controllers/interfaces";
import { NewCar, Cars } from "../models/cars";
import { CarsModel } from '../db/models/cars'
import { v4 } from 'uuid';

export class CarsRepository implements ICarsRepository {
  public async findByName(name: string): Promise<Cars | undefined> {
    const car = await CarsModel.findOne({ where: { name } })
    if(!car) {
      return undefined
    }
 
    return car.dataValues
  }

  public async create(newCar: NewCar): Promise<Cars> {
    const id = v4()
    const car = await CarsModel.create({ id, ...newCar })
    return car.dataValues
  }
}