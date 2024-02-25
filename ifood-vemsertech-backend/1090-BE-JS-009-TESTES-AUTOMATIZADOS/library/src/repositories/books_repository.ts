import { BookModel } from '../db/models/Book'
import { Book, IBooksRepository, NewBook } from "../services/interfaces";

export class BooksRepository implements IBooksRepository {
  
  public async create(newBook: NewBook): Promise<Book> {
    const book = await BookModel.create(newBook)

    return {
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      edition: book.dataValues.edition,
      editor: book.dataValues.editor,
    }
  }

  public async findByName(name: string): Promise<Book | undefined> {
    const book = await BookModel.findOne({ where: { name } })

    if(book.dataValues) {
      return undefined
    }

    return {
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      edition: book.dataValues.edition,
      editor: book.dataValues.editor,
    }
  }

  public async listAllBooks(): Promise<Book[]> {
    const books = await BookModel.findAll()

    return books.map(book => ({
      id: book.dataValues.id,
      name: book.dataValues.name,
      author: book.dataValues.author,
      edition: book.dataValues.edition,
      editor: book.dataValues.editor,
    }))
  }
}