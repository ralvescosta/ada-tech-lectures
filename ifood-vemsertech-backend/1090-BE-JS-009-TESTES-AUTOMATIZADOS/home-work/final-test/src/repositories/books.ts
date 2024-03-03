import { IBooksRepository } from '../controllers/interfaces';
import { Book, NewBook } from '../controllers/models';
import { BooksModel } from '../db/models/Books'
import { v4 } from 'uuid'

export class BooksRepository implements IBooksRepository {
  public async create(newBook: NewBook): Promise<Book> {
    const id = v4()
    const book = await BooksModel.create({id, ...newBook})
    return book.dataValues
  }

  public async getById(id: string): Promise<Book | undefined> {
    const book = await BooksModel.findOne({ where: { id } })
    if(!book) 
      return undefined

    return book.dataValues
  }

  public async getByTitle(title: string): Promise<Book | undefined> {
    const book = await BooksModel.findOne({ where: { title } })
    if(!book) 
      return undefined

    return book.dataValues
  }

  public async list(): Promise<Book[]> {
    const books = await BooksModel.findAll()

    return books.map(book => ({
      id: book.dataValues.id,
      title: book.dataValues.title,
      subtitle: book.dataValues.subtitle,
      published_at: book.dataValues.published_at,
      publishing_company: book.dataValues.publishing_company,
      authors: book.dataValues.authors
    }))
  }
  
  public async update(id: string, book: NewBook): Promise<void> {
    await BooksModel.update({ ...book }, { where: { id } })
  }

  public async delete(id: string): Promise<void> {
    await BooksModel.destroy({ where: { id } })
  }
}