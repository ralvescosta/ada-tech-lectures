// describe('GET /cars', () => {
//  it('should get all cars, and the created cars should be in it', () =>{
//     cy.wrap(Cypress.env('newCar')).as('newCar');
//     cy.get('@newCar').then((car: any) => {
//       cy
//         .api({
//             url: 'http://localhost:3000/cars'
//         })
//         .then((res) => {
          
//           expect(res.status).to.be.equal(200)
//           expect(Array.isArray(res.body)).to.be.true
//           expect(res.body.length).to.be.greaterThan(1)

//           const exist = res.body.find(item => item.id === car.id)
          
//           expect(exist).to.not.be.null
//         })
//     });
//   }) 
// })

import { newCar } from '../fixtures/newCar'

describe('GET /cars', () => {
 it('should get all cars, and the created cars should be in it', () =>{
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
              url: 'http://localhost:3000/cars'
          })
          .then((res) => {
            
            expect(res.status).to.be.equal(200)
            expect(Array.isArray(res.body)).to.be.true
            expect(res.body.length).to.be.greaterThan(1)

            const exist = res.body.find(item => item.id === carResponse.body.id)
            
            expect(exist).to.not.be.null
          })
      })
  })
})