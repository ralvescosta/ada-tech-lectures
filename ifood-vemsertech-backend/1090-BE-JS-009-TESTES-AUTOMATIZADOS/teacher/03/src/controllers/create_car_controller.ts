import { NewCar, Car } from "../models/cars";
import { CarsModel } from '../db/models/cars'

class CreateCarController {
  constructor() {}

  public async create(newCar: NewCar): Promise<Car> {
    let car = await CarsModel.create(newCar)

    return {} as any
  }
}

export { CreateCarController }