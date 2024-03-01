import { CreateCarController } from '../../src/controllers/create_car_controller'
import { NewCar } from '../../src/models/cars'

describe('CreateCarsController', () => {
  it('should create car if there is not other car if the same name', async () => {
    // arrange
    const newCar: NewCar = {name: "unique-name", model: "fiat", year: new Date()}
    const createCarController = new CreateCarController()

    //act
    const promise = createCarController.create(newCar)

    //assert
    await expect(promise).resolves.not.toThrow()
    // expect(promise).resolves.toContainEqual(newCar)
  })

  it.todo('should return err if there is another car with the same name')

  it.todo('should create the car only if the model was allowed')
})