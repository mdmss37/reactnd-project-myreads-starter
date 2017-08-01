import React, { Component } from "react"

class Book extends Component {

  state = {
    shelf: this.props.shelf,
    book: this.props.book
  }

  updateShelfBySelect = (e) => {
    this.props.onUpdateShelf(this.state.book, e.target.value)
  }

  render() {
    const { book } = this.state

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.updateShelfBySelect}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book
