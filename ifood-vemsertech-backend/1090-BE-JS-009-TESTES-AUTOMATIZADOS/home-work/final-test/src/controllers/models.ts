export type User = {
  id: string;
  name: string;
  email: string;
}

export type NewUser = Omit<User, 'id'>;

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  publishing_company: string;
  published_at: Date,
  authors: string
}

export type NewBook = Omit<Book, "id">

export type BooksRental = {
  id: string;
  book_id: string,
  book?: Book,
  user_id: string,
  user?: User,
  rented_at: Date,
  rental_time: Date
}

export type NewBooksRental = Omit<BooksRental, 'id' | 'book' | 'user'>
