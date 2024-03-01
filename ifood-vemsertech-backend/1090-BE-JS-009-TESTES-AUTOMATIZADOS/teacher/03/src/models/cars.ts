export type Car = {
  id: string,
  name: string,
  model: string,
  year: Date,
}

export type NewCar = Omit<Car, "id">