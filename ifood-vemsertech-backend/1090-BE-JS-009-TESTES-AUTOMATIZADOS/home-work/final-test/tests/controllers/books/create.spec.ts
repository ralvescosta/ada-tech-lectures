import { CreateBooksController } from '../../../src/controllers/books/create'
import { logger } from '../../mocks/logger'
import { booksRepositoryMock } from '../../mocks/books_repository'
import { Book, NewBook } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('CreateBooksController', () => {
  function makeSut() {
    const controller = new CreateBooksController(logger, booksRepositoryMock)
    
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

    const requestMock = { body: newBookMock } as Request

    const responseMock = {
      statusCode: 0,
      status: (status: number) => {
        responseMock.statusCode = status
        return {
          json: jest.fn()
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

  it('should create book if there is no other book with the same title', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getByTitle').mockResolvedValueOnce(undefined)
    jest.spyOn(booksRepositoryMock, 'create').mockResolvedValueOnce(bookMock)

    const promise = controller.create(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getByTitle).toHaveBeenCalledWith(newBookMock.title)
    expect(booksRepositoryMock.create).toHaveBeenCalledWith(newBookMock)
    expect(responseMock.statusCode).toEqual(201)
  })

  it('should return 409 if there is other book with the same title', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getByTitle').mockResolvedValueOnce(bookMock)
    jest.spyOn(booksRepositoryMock, 'create')

    const promise = controller.create(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getByTitle).toHaveBeenCalledWith(newBookMock.title)
    expect(booksRepositoryMock.create).not.toHaveBeenCalled()
    expect(responseMock.statusCode).toEqual(409)
  })

  it('should return 500 if some error occur', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getByTitle').mockRejectedValueOnce(new Error('some error'))

    const promise = controller.create(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getByTitle).toHaveBeenCalledWith(newBookMock.title)
    expect(responseMock.statusCode).toEqual(500)
  })
})