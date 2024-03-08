import { newCar } from '../fixtures/new_car'

describe('GET /cars', () => {
  it('should get all cars created', () => {
    cy
    .api({
      url: 'http://localhost:3000/cars',
      method: 'POST',
      body: newCar
    })
    .then((response) => {
      cy.wrap(response.body).as('newCar')
    })

    cy
    .get('@newCar')
    .then((car: any) => {
      cy
      .api({
        url: 'http://localhost:3000/cars',
        method: 'GET'
      })
      .then((response) => {
        expect(response.status).to.be.equal(200)
        expect(response.body).to.not.be.empty
        expect(response.body.length).to.be.greaterThan(1)
        
        const exist = response.body.find(item => item.id === car.id)

        expect(exist).to.not.be.empty
        expect(exist.name).to.be.equal(car.name)
        expect(exist.model).to.be.equal(car.model)
      })
    })
  })
})