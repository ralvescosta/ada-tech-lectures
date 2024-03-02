import { IBooksRentalRepository } from '../controllers/interfaces';
import { BooksRental, NewBooksRental } from '../controllers/models';
import { BooksModel } from '../db/models/Books';
import { BooksRentalModel } from '../db/models/BooksRental'
import { UsersModel } from '../db/models/Users';

export class BooksRentalRepository implements IBooksRentalRepository {
  public async create(newBookRental: NewBooksRental): Promise<BooksRental> {
    const bookRental = await BooksRentalModel.create(newBookRental);
    return bookRental.dataValues
  }

  public async getById(id: string): Promise<BooksRental> {
    const bookRenal = await BooksRentalModel.findOne({ where: { id } })
    if(bookRenal)
      return undefined

    return bookRenal.dataValues
  }

  public async list(): Promise<BooksRental[]> {
    const booksRentals = await BooksRentalModel.findAll({
      include: [
        {
          model: UsersModel,
          as: "userBooksRental"
        },
        {
          model: BooksModel,
          as: "bookBooksRental",
        }
      ]
    })

    return booksRentals.map(bookRental => ({
      id: bookRental.dataValues.id,
      book_id: bookRental.dataValues.book_id,
      book: bookRental.dataValues.book,
      user_id: bookRental.dataValues.user_id,
      user: bookRental.dataValues.user,
      rental_time: bookRental.dataValues.rental_time,
      rented_at: bookRental.dataValues.rented_at,
    }))
  }

  public async delete(id: string): Promise<void> {
    await BooksRentalModel.destroy({ where: { id }})
  }
}