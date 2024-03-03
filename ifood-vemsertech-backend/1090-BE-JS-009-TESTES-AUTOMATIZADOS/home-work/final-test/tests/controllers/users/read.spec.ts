import { ReadUsersController } from '../../../src/controllers/users/read'
import { logger } from '../../mocks/logger'
import { usersRepositoryMock } from '../../mocks/users_repository'
import { NewUser, User } from '../../../src/controllers/models'
import { fakerEN } from '@faker-js/faker'
import { Request, Response } from 'express'

describe('ReadUsersController', ()=> {
  function makeSut() {
    const controller = new ReadUsersController(logger, usersRepositoryMock)
    
    const newUserMock: NewUser = {
      name: fakerEN.internet.userName(),
      email: fakerEN.internet.email(),
    }

    const userMock: User = {
      id: fakerEN.string.uuid(),
      ...newUserMock
    }

    const requestMock = { 
      body: newUserMock,
      params: { id: userMock.id } as any
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
      controller, newUserMock, userMock, requestMock, responseMock
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getById', () => {
    it('should return user if the user exist', async () => {
      const { controller, newUserMock, userMock, requestMock, responseMock } = makeSut()
      jest.spyOn(usersRepositoryMock, 'getById').mockResolvedValueOnce(userMock)

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(usersRepositoryMock.getById).toHaveBeenCalledWith(userMock.id)
      expect(responseMock.statusCode).toEqual(200)
    })

    it('should return 204 with empty user if the user was not founded', async () => {
      const { controller, newUserMock, userMock, requestMock, responseMock } = makeSut()
      jest.spyOn(usersRepositoryMock, 'getById').mockResolvedValueOnce(undefined)

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(usersRepositoryMock.getById).toHaveBeenCalledWith(userMock.id)
      expect(responseMock.statusCode).toEqual(204)
    })

    it('should return 500 if some error occur', async () => {
      const { controller, newUserMock, userMock, requestMock, responseMock } = makeSut()
      jest.spyOn(usersRepositoryMock, 'getById').mockRejectedValueOnce(new Error('some error'))

      const promise = controller.getById(requestMock, responseMock)

      await expect(promise).resolves.not.toThrow()
      expect(usersRepositoryMock.getById).toHaveBeenCalledWith(userMock.id)
      expect(responseMock.statusCode).toEqual(500)
    })

  })

  describe('list', () => {
    it.todo('should return the list of users')

    it.todo('should return 500 if some error occur')
  })
})