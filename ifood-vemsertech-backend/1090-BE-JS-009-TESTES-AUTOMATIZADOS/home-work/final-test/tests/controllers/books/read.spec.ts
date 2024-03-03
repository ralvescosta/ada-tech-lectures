import { ReadBooksController } from '../../../src/controllers/books/read'
import { logger } from '../../mocks/logger'
import { booksRepositoryMock } from '../../mocks/books_repository'
import { Book, NewBook } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('ReadBooksController', ()=> {
  function makeSut() {
    const controller = new ReadBooksController(logger, booksRepositoryMock)
    
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

  describe('getById', () => {
    it('should return book if the book exist', async () => {
      const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
      jest.spyOn(booksRepositoryMock, 'getById').mockResolvedValueOnce(bookMock)

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
      expect(responseMock.statusCode).toEqual(200)
    })

    it('should return 204 with empty body if the book was not founded', async () => {
      const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
      jest.spyOn(booksRepositoryMock, 'getById').mockResolvedValueOnce(undefined)

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
      expect(responseMock.statusCode).toEqual(204)
    })

    it('should return 500 if some error occur', async () => {
      const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
      jest.spyOn(booksRepositoryMock, 'getById').mockRejectedValueOnce(new Error('some error'))

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
      expect(responseMock.statusCode).toEqual(500)
    })

  })

  describe('list', () => {
    it.todo('should return the list of books')

    it.todo('should return 500 if some error occur')
  })
})