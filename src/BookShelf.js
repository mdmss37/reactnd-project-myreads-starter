import React, { Component } from "react"
import Book from "./Book"

const BookShelf = ({ books, name, onUpdateShelf }) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              // we are not sure id is unique, need verify
              // temporary use id + title
              let key = book.id + "-" + book.title
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateShelf={onUpdateShelf}
                />
              </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }

export default BookShelf
