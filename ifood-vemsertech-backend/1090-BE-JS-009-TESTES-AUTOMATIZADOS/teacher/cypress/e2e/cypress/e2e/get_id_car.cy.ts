

// describe('GET /cars/:id', () => {
//   it('should get the car by id', () => {
//     cy.wrap(Cypress.env('newCar')).as('newCar');
//     cy.get('@newCar').then((car: any) => {
//       cy
//         .api({
//             url: `http://localhost:3000/cars/${car.id}`
//         })
//         .then((res) => {
          
//           expect(res.status).to.be.equal(200)
//           expect(res.body).to.not.be.null
//           expect(res.body.name).to.be.equal(car.name)
//           expect(res.body.model).to.be.equal(car.model)
//         })
//     });
//   })

//   it('should return 204 if the is no car with the same id', () => {
//     cy
//       .api({
//             url: `http://localhost:3000/cars/${fakerEN.string.uuid()}`
//       })
//       .then((res) => {
//         expect(res.status).to.be.equal(204)
//         expect(res.body).to.be.empty
//       })
//   })
// })

import { newCar } from '../fixtures/newCar'
import { fakerEN } from '@faker-js/faker'

describe('GET /cars/:id', () => {
  it('should get the car by id', () => {
    cy
      .api({
        url: 'http://localhost:3000/cars',
        method: 'POST',
        body: newCar,
        failOnStatusCode: false,
      })
      .then((carResponse) => {
        cy
          .api({
              url: `http://localhost:3000/cars/${carResponse.body.id}`
          })
          .then((res) => {
            
            expect(res.status).to.be.equal(200)
            expect(res.body).to.not.be.null
            expect(res.body.name).to.be.equal(carResponse.body.name)
            expect(res.body.model).to.be.equal(carResponse.body.model)
          })
      })
    
  })

  it('should return 204 if the is no car with the same id', () => {
    cy
      .api({
            url: `http://localhost:3000/cars/${fakerEN.string.uuid()}`
      })
      .then((res) => {
        expect(res.status).to.be.equal(204)
        expect(res.body).to.be.empty
      })
  })
})