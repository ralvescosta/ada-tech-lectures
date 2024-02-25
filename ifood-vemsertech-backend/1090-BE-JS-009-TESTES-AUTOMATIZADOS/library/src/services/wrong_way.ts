import { BookModel } from '../db/models/Book'
import { Book, NewBook } from "./interfaces";

export class BooksServices {

  public async createNewBook(newBook: NewBook): Promise<Book> {
     const book = await BookModel.create(newBook)

    return {
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      edition: book.dataValues.edition,
      editor: book.dataValues.editor,
    }
  }
}