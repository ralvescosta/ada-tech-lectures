import { Request, Response } from 'express'
import { ICarsRepository } from './interfaces'

export class ReadCarsController {
  constructor(
    private readonly carsRepository: ICarsRepository
  ){}

  public async getById(req: Request, res: Response) {
    const { id } = req.params
    
    try {
      const car = await this.carsRepository.findById(id)
      if(!car) {
        return res.status(204).send()
      }

      return res.status(200).json(car)
    }catch(err) {
      return res.status(500).json({ message: 'failed, try again latter' })
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const cars = await this.carsRepository.findAll()

      return res.status(200).json(cars)
    }catch(err) {
      return res.status(500).json({ message: 'failed, try again latter' })
    }
  }
}