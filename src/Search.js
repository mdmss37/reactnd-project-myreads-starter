import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import Book from "./Book"

class Search extends Component {

  state = {
    query: "",
    searchResult: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
    // it is dangerous to use this.state.query, as setState is async
    // below use query which is current state.
    if (query.trim() === "") {
      this.setState({ searchResult: []})
    } else {
      BooksAPI.search(query.trim()).then(searchResult => {
        // ISSUE: want to match main and search on shelf, but not working
        searchResult = searchResult.map((b) => {
          for (const book of this.props.books) {
            if (b.id === book.id) {
              return book
            } else {
              return b
            }
          }
        })
        this.setState({ searchResult: searchResult })
      })
    }
  }

  clearQuery = () => {
    this.setState({ query: "" })
  }

  render() {

    const { books, onUpdateShelf } = this.props
    const { query } = this.state

    return(
      <div className="search-books">
        {/*JSON.stringify(this.state)*/}
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
              type="text"
              placeholder="Search by title or author"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.map((searchedBook) => (
              <li key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  onUpdateShelf={onUpdateShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      )
    }
  }

export default Search
