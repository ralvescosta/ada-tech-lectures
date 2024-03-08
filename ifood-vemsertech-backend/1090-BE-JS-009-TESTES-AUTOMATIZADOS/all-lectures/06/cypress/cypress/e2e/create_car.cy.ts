import { newCar } from '../fixtures/new_car'

describe('POST /cars', () => {
  it('should create a new car and return the car values', () => {
    cy
    .api({
      url: 'http://localhost:3000/cars',
      method: 'POST',
      body: newCar
    })
    .then((response) => {
      expect(response.status).to.be.equal(201)
      expect(response.body).to.not.be.null
      expect(response.body.name).to.be.equal(newCar.name)
      expect(response.body.model).to.be.equal(newCar.model)
    })
  })

  it('should not create a new car with the car was already created', () => {
    cy
    .api({
      url: 'http://localhost:3000/cars',
      method: 'POST',
      body: newCar,
      failOnStatusCode: false
    })
    .then((response) => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.be.equal(409)
      expect(response.body).to.not.be.null
      expect(response.body.message).to.be.equal('already exist a car with the same name')
    })
  })
})