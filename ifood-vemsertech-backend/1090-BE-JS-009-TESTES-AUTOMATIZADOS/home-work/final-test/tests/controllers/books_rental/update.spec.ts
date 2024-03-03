import { UpdateBooksRentalController } from '../../../src/controllers/books_rental/update'
import { logger } from '../../mocks/logger'
import { booksRentalRepositoryMock } from '../../mocks/books_rental_repository'
import { BooksRental, NewBooksRental } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('UpdateBooksRentalController', ()=> {

  function makeSut() {
    const controller = new UpdateBooksRentalController(logger, booksRentalRepositoryMock)
    
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

  it.todo('should update and return book rental if the book rental exist')

  it.todo('should return 404 statusCode and not update the book rental if there is no rental with the id provided')

  it.todo('should return 409 statusCode and not update the book rental if there is a rental with the same book id')

  it.todo('should return 500 if some error occur')
})