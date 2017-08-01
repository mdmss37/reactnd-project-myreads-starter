import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import BookList from "./BookList"
import Search from "./Search"
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState({books: books})
    })
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
          )}/>

      </div>
    )
  }
}

export default BooksApp
