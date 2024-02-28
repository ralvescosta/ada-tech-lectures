export type Book = {
  id: string,
  name: string,
  author: string,
  edition: string,
  editor: string,
}

export type NewBook = Omit<Book, 'id'>

export interface IBooksRepository {
  create(newBook: NewBook): Promise<Book>
  findByName(name: string): Promise<Book | undefined>
  listAllBooks(): Promise<Book[]>
}