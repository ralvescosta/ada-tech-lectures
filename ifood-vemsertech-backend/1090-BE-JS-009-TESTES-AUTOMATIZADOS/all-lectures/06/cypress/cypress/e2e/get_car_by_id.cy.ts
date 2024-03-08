import { newCar } from '../fixtures/new_car'
import { fakerEN } from '@faker-js/faker'

describe('GET /cars/:id', () => {
  it('should return a car with the id provided exist in the API', () => {
    cy
    .api({
      url: 'http://localhost:3000/cars',
      method: 'POST',
      body: newCar
    })
    .then((createCarResponse) => {
      cy
      .api({
        url: `http://localhost:3000/cars/${createCarResponse.body.id}`,
        method: 'GET',
      })
      .then((response) => {
        expect(response.status).to.be.equal(200)
        expect(response.body).to.not.be.null
        expect(response.body.id).to.be.equal(createCarResponse.body.id)
      })
    })
  })

  it('should return 204 if there is no car with the id provided', () => {
    cy
    .api({
      url: `http://localhost:3000/cars/${fakerEN.string.uuid()}`,
      method: 'GET',
    })
    .then((response) => {
      expect(response.status).to.be.equal(200)
      expect(response.body).to.be.empty
    })
  })
})