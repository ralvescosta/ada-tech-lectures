import { UpdateUsersController } from '../../../src/controllers/users/update'
import { logger } from '../../mocks/logger'
import { usersRepositoryMock } from '../../mocks/users_repository'
import { Book, NewBook } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('ReadBooksController', ()=> {
  function makeSut() {
    const controller = new UpdateUsersController(logger, usersRepositoryMock)
    
    const newBookMock: NewBook = {
      title: fakerEN.word.words(),
      subtitle: fakerEN.word.words(),
      publishing_company: fakerEN.company.name(),
      published_at: fakerEN.date.anytime(),
      authors: fakerEN.internet.userName(),
    }

    const bookMock: Book = {
      id: fakerEN.string.uuid(),
      ...newBookMock
    }

    const requestMock = { 
      body: newBookMock,
      params: { id: bookMock.id } as any
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
      controller, newBookMock, bookMock, requestMock, responseMock
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it.todo('should update and return user if the user was funded')

  it.todo('should return 404 statusCode and not update the book rental if there is no rental with the id provided')

  it.todo('should return 500 if some error occur')
})