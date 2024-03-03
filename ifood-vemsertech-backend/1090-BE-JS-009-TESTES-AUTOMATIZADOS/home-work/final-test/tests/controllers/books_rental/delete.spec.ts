import { DeleteBooksRentalController } from '../../../src/controllers/books_rental/delete'
import { logger } from '../../mocks/logger'
import { booksRentalRepositoryMock } from '../../mocks/books_rental_repository'
import { NewBooksRental, BooksRental } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('DeleteBooksRentalController', ()=> {
  function makeSut() {
    const controller = new DeleteBooksRentalController(logger, booksRentalRepositoryMock)
    
    const newBooksRentalMock: NewBooksRental = {
      book_id: fakerEN.string.uuid(),
      user_id: fakerEN.string.uuid(),
      rented_at: fakerEN.date.anytime(),
      rental_time: fakerEN.date.anytime(),
    }

    const booksRentalMock: BooksRental = {
      id: fakerEN.string.uuid(),
      ...newBooksRentalMock
    }

    const requestMock = { 
      body: newBooksRentalMock,
      params: { id: booksRentalMock.id } as any,
    } as Request

    const responseMock = {
      statusCode: 0,
      status: (status: number) => {
        responseMock.statusCode = status
        return {
          json: jest.fn(),
          send: jest.fn(),
        } as any
      },
    } as Response

    return {
      controller, newBooksRentalMock, booksRentalMock, requestMock, responseMock
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should delete the book rental if the book exist', async () => {
     const { controller, newBooksRentalMock, booksRentalMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRentalRepositoryMock, 'getById').mockResolvedValueOnce(booksRentalMock)
    jest.spyOn(booksRentalRepositoryMock, 'delete').mockResolvedValueOnce()

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRentalRepositoryMock.getById).toHaveBeenCalledWith(booksRentalMock.id)
    expect(booksRentalRepositoryMock.delete).toHaveBeenCalledWith(booksRentalMock.id)
    expect(responseMock.statusCode).toEqual(200)
  })

   it('should not delete the book rental if there is no rental with the same id', async () => {
     const { controller, newBooksRentalMock, booksRentalMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRentalRepositoryMock, 'getById').mockResolvedValueOnce(undefined)
    jest.spyOn(booksRentalRepositoryMock, 'delete')

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRentalRepositoryMock.getById).toHaveBeenCalledWith(booksRentalMock.id)
    expect(booksRentalRepositoryMock.delete).not.toHaveBeenCalled()
    expect(responseMock.statusCode).toEqual(409)
  })

  it('should return 500 if some error occur', async () => {
     const { controller, newBooksRentalMock, booksRentalMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRentalRepositoryMock, 'getById').mockRejectedValueOnce(new Error('some error'))
    jest.spyOn(booksRentalRepositoryMock, 'delete')

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRentalRepositoryMock.getById).toHaveBeenCalledWith(booksRentalMock.id)
    expect(booksRentalRepositoryMock.delete).not.toHaveBeenCalled()
    expect(responseMock.statusCode).toEqual(500)
  })
})