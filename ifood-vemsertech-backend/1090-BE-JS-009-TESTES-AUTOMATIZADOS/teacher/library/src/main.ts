import { BooksServices } from './services/first'

/* 
export type Book = {
  id: string,
  name: string,
  author: string,
  edition: string,
  editor: string,
}

export type NewBook = Omit<Book, 'id'>
*/

;import { NewBook } from './services/interfaces';
(()=> {
  const service = new BooksServices()

  console.log("All books\n")
  console.table(service.booksList())
  console.log("\n")

  const book: NewBook = {
    name: "my book",
    author: "my self",
    editor: "mine",
    edition: "first"
  }

  console.log("Creating new book\n")
  console.table(service.createNewBook(book))
  console.log("\n")

  console.log("All books\n")
  console.table(service.booksList())
  console.log("\n")
})()