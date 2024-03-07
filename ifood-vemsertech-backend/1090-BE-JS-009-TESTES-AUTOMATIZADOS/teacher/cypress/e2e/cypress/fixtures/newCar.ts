import { fakerEN } from '@faker-js/faker'

export const newCar = { 
  name: fakerEN.lorem.word(), 
  model: fakerEN.company.name(), 
  year: fakerEN.date.anytime(), 
}