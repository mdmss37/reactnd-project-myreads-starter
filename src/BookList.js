import React, { Component } from "react"
import BookShelf from "./BookShelf"

class BookList extends Component {
  render() {
    return(
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.props.books.filter((book) => { return "currentlyReading" === book.shelf})}
            name={"Currently Reading"}
          />
          <BookShelf
            books={this.props.books.filter((book) => {return "wantToRead" === book.shelf})}
            name={"Want to Read"}
          />
          <BookShelf
            books={this.props.books.filter((book) => {return "read" === book.shelf})}
            name={"Read"}
          />
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
        {JSON.stringify(this.props.books.slice(0,10))}
      </div>
      )
  }
}

export default BookList
