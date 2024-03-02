import { CreateCarController } from '../../src/controllers/create_car_controller'
import { ICarRepository } from '../../src/controllers/interfaces'
import { NewCar } from '../../src/models/cars'
import { Request, Response } from 'express'

describe('CreateCarsController', () => {
  it('should create car if there is not other car if the same name', async () => {
    // arrange
    const newCar: NewCar = {name: "unique-name", model: "fiat", year: new Date()}
    const request = { body: newCar } as Request
    const response = {} as Response
    const carRepository = {} as ICarRepository
    const createCarController = new CreateCarController(carRepository)
    //

    //act
    const promise = createCarController.create(request, response)
    //

    //assert
    await expect(promise).resolves.not.toThrow()
    await expect(promise).resolves.toMatchObject(newCar)
    //
  })

  it.todo('should return err if there is another car with the same name')

  it.todo('should create the car only if the model was allowed')
})