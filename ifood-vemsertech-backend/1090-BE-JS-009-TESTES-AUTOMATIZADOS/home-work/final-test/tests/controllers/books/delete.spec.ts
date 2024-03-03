import { DeleteBooksController } from '../../../src/controllers/books/delete'
import { logger } from '../../mocks/logger'
import { booksRepositoryMock } from '../../mocks/books_repository'
import { Book, NewBook } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('DeleteBooksController', ()=> {
  function makeSut() {
    const controller = new DeleteBooksController(logger, booksRepositoryMock)
    
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

  it('should delete the book if the book exist', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getById').mockResolvedValueOnce(bookMock)
    jest.spyOn(booksRepositoryMock, 'delete').mockResolvedValueOnce()

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
    expect(booksRepositoryMock.delete).toHaveBeenCalledWith(bookMock.title)
    expect(responseMock.statusCode).toEqual(200)
  })

   it('should not delete the book if there is no book with the id provided', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getById').mockResolvedValueOnce(undefined)
    jest.spyOn(booksRepositoryMock, 'delete')

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
    expect(booksRepositoryMock.delete).not.toHaveBeenCalled()
    expect(responseMock.statusCode).toEqual(404)
  })

  it('should return 500 if some error occur', async () => {
    const { controller, newBookMock, bookMock, requestMock, responseMock } = makeSut()
    jest.spyOn(booksRepositoryMock, 'getById').mockRejectedValueOnce(new Error('some error'))
    jest.spyOn(booksRepositoryMock, 'delete')

    const promise = controller.delete(requestMock, responseMock)

    await expect(promise).resolves.not.toThrow()
    expect(booksRepositoryMock.getById).toHaveBeenCalledWith(bookMock.id)
    expect(booksRepositoryMock.delete).not.toHaveBeenCalled()
    expect(responseMock.statusCode).toEqual(500)
  })
})