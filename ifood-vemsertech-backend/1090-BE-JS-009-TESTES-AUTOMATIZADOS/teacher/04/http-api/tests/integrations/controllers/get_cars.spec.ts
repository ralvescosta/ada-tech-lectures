import { Api } from '../../../src/api'
import request from 'supertest'
import { CarsModel } from '../../../src/db/models/cars'
import { v4 } from 'uuid'

describe('Read', () => {
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
    await CarsModel.create(car)
  })

  describe('GET /cars', () => {
    it('should read all cars from database', async () => {
      //arrange
      const { api } = sut()
      const expectedBody = [{...car, year: car.year.toISOString() }]

      //act
      const response = await request(api.app)
        .get('/cars');

      //assert
      expect(response.status).toEqual(200)
      expect(response.body).toEqual(expectedBody)
    })
  })
  
  describe('GET /cars/:id', () => {
    it('should read the car based on the provided id', async () => {
      //arrange
      const { api } = sut()
      const expectedBody = {...car, year: car.year.toISOString() }

      //act
      const response = await request(api.app)
        .get('/cars/' + car.id);

      //assert
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual(car.name)
    })
  })
})