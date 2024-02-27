import { BookModel } from '../db/models/Book'
import { Book, NewBook } from "./interfaces";

export class BooksServices {

  public async createNewBook(newBook: NewBook): Promise<Book> {
    const already = await BookModel.findOne({ where: { name: newBook.name } })
    if (already.dataValues) {
      throw new Error('book already created!')
    }

    const book = await BookModel.create(newBook)

    return {
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      edition: book.dataValues.edition,
      editor: book.dataValues.editor,
    }
  }

  public async booksList(): Promise<Book[]> {
    const books = await BookModel.findAll()

    return books.map(book => ({
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      editor: book.dataValues.editor,
      edition: book.dataValues.edition,
    }))
  }
}