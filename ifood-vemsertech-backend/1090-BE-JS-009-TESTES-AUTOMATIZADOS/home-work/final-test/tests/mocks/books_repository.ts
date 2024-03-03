import { IBooksRepository } from "../../src/controllers/interfaces";
import { Book, NewBook } from "../../src/controllers/models";

export const booksRepositoryMock: IBooksRepository = {
  create: (newBook: NewBook): Promise<Book> => jest.fn as any,
  getById: (id: string): Promise<Book | undefined> => jest.fn as any,
  getByTitle: (title: string): Promise<Book | undefined> => jest.fn as any,
  list: (): Promise<Book[]> => jest.fn as any,
  update: (id: string, book: NewBook): Promise<void> => jest.fn as any,
  delete: (id: string): Promise<void> => jest.fn as any,
}