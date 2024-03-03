import { IBooksRentalRepository } from "../../src/controllers/interfaces";
import { BooksRental, NewBooksRental } from "../../src/controllers/models";

export const booksRentalRepositoryMock: IBooksRentalRepository = {
  create: (newBookRental: NewBooksRental): Promise<BooksRental> => jest.fn as any,
  getById: (id: string): Promise<BooksRental | undefined> => jest.fn as any,
  getByBookId: (id: string): Promise<BooksRental | undefined> => jest.fn as any,
  list: (): Promise<BooksRental[]> => jest.fn as any,
  delete: (id: string): Promise<void> => jest.fn as any,
}