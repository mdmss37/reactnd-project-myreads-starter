import React, { Component } from "react"
import BookShelf from "./BookShelf"

class BookList extends Component {
  render() {
    return(
      <div className="list-books">
        {JSON.stringify(this.props.books[0])}
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.props.books}
            name={"Currently Reading"}
          />
          <BookShelf
            books={this.props.books}
            name={"Want to Read"}
          />
          <BookShelf
            books={this.props.books}
            name={"Read"}
          />
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
      )
  }
}

export default BookList
