import { Api } from '../../../src/api'
import request from 'supertest'
import { CarsModel } from '../../../src/db/models/cars'
import { v4 } from 'uuid'

describe('Create', () => {
   const car = { id: v4(), model: "model", name: "name", year: new Date() };

  function sut() {
    const api = new Api()
    api.setup()

    return { api }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  beforeAll(async () => {
    await CarsModel.sequelize?.sync({ force: true })
  })

  describe('POST /cars', () => {
    it('should read all cars from database', async () => {
      //arrange
      const { api } = sut()
      const expectedBody = {...car, year: car.year.toISOString() }

      //act
      const response = await request(api.app)
        .post('/cars')
        .send(car);

      //assert
      expect(response.status).toEqual(201)
      expect(response.body.name).toEqual(expectedBody.name)
    })
  })
})