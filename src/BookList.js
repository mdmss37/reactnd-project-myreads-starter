import React, { Component } from "react"
import { Link } from "react-router-dom"
import BookShelf from "./BookShelf"

class BookList extends Component {

  render() {

    const { books, onUpdateShelf } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={books.filter((book) => { return "currentlyReading" === book.shelf})}
            name={"Currently Reading"}
            onUpdateShelf={onUpdateShelf}
          />
          <BookShelf
            books={books.filter((book) => {return "wantToRead" === book.shelf})}
            name={"Want to Read"}
            onUpdateShelf={onUpdateShelf}
          />
          <BookShelf
            books={books.filter((book) => {return "read" === book.shelf})}
            name={"Read"}
            onUpdateShelf={onUpdateShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      )
  }
}

export default BookList
