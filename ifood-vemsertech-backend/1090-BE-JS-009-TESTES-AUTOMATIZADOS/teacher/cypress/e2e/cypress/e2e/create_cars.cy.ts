import { newCar } from '../fixtures/newCar';

describe('POST /cars', () => {
  it('should create a new car', () =>{
    cy
    .api({
        url: 'http://localhost:3000/cars',
        method: 'POST',
        body: newCar
      })
      .then((res) => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.not.be.null
        expect(res.body.name).to.be.equal(newCar.name)
        expect(res.body.model).to.be.equal(newCar.model)

        cy.wrap(res.body).then(newCar => {
          Cypress.env('newCar', newCar);
        })
      })
  })

  it('should return conflict with we try to create the same car twice', () => {
    cy
    .api({
        url: 'http://localhost:3000/cars',
        method: 'POST',
        body: newCar,
        failOnStatusCode: false,
      })
      .then((res) => {
        cy.log(res.body)

        expect(res.status).to.be.equal(409)
        expect(res.body.message).to.be.equal("already exist a car with the same name")
      })
  })
})