import React, { Component } from "react"

class Book extends Component {

  state = {
    shelf: this.props.shelf,
    book: this.props.book
  }

  updateShelf = (shelf) => {
    this.setState({ shelf: shelf })
  }

  render() {
    const { book, shelf } = this.state

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onClick={(e) => this.updateShelf(e.target.value)}>
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
