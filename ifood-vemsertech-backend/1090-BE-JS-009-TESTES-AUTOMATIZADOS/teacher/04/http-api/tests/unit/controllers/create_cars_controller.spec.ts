import { CreateCarsController } from '../../../src/controllers/create_cars_controller'
import { Request } from 'express'
import { Cars, NewCar } from '../../../src/models/cars'
import { ICarsRepository } from '../../../src/controllers/interfaces'

describe('CreateCarsController', () => {
  function sut() {
    const carsRepository: ICarsRepository = {
      create: (newCar: NewCar): Promise<Cars> => jest.fn as any,
      findByName: (name: string): Promise<Cars | undefined> => jest.fn as any,
      findById: (id: string): Promise<Cars | undefined> => jest.fn as any,
      findAll: (): Promise<Cars[]> => jest.fn as any
    }
    const controller = new CreateCarsController(carsRepository)
    const newCar: NewCar = { name: 'name', model: 'my-model', year: new Date() }
    const request = { body: newCar } as Request
    const response: any = {
      statusCode: 0,
      status: (status: number) => {
        response.statusCode = status
        return {
          json: jest.fn()
        }
      },
    }

    return { carsRepository, controller, newCar, request, response }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  it('should create a new car if there is no other car with the same name', async () => {
    //arrange
    const { carsRepository, controller, newCar, request, response  } = sut()
    jest.spyOn(carsRepository, 'findByName').mockResolvedValueOnce(undefined)
    jest.spyOn(carsRepository, 'create').mockResolvedValueOnce({ id: 'id', ...newCar })

    //act
    const promise = controller.create(request, response)

    //assert
    await expect(promise).resolves.not.toThrow()
    expect(carsRepository.findByName).toHaveBeenCalledWith(newCar.name)
    expect(response.statusCode).toEqual(201)
  })

  it('should failure if there is a car with the same name', async() => {
    //arrange
    const { carsRepository, controller, newCar, request, response  } = sut()
    jest.spyOn(carsRepository, 'findByName').mockResolvedValueOnce({ id: 'id', ...newCar })
    jest.spyOn(carsRepository, 'create')

    //act
    const promise = controller.create(request, response)

    //assert
    await expect(promise).resolves.not.toThrow()
    expect(carsRepository.create).not.toHaveBeenCalled()
    expect(response.statusCode).toEqual(409)
  })

  it('should return statusCode 500 repository throw an error', async() => {
    //arrange
    const { carsRepository, controller, request, response  } = sut()
    jest.spyOn(carsRepository, 'findByName').mockRejectedValueOnce(new Error('internal error'))
    jest.spyOn(carsRepository, 'create')

    //act
    const promise = controller.create(request, response)

    //assert
    await expect(promise).resolves.not.toThrow()
    expect(carsRepository.create).not.toHaveBeenCalled()
    expect(response.statusCode).toEqual(500)
  })
})