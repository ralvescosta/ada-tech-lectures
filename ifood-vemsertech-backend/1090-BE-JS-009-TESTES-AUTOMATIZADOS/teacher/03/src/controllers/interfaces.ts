import { NewCar, Car } from "../models/cars";

export interface ICarRepository {
  findByName(name: string): Promise<Car | undefined>
  create(newCar: NewCar): Promise<Car>
}