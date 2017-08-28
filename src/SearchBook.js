import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class SearchBook extends Component {
  state = {
    query: "",
    books: []
  }

  updateQuery = (query) => {
    BooksAPI.search(query, 7).then((book) => {
      this.setState({books: book})
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return(
      <div className="app">
        <div className="search-books">
            <div className="search-books-bar">
              <Link
               to='/'
               className="close-search"
              //  onClick={() => this.props.onSearchState({ showSearchPage: false })}
               >Close</Link>
            <div className="search-books-input-wrapper">
              <input
               type="text"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
               placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {this.props.books.map((book) => (
              <li>
                <div key={book.id} className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}} > </div>
                    <div className="book-shelf-changer">
                      <select onChange={(event) => this.updateBook(book, event.target.value)}>
                        <option value="none">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>

                </div>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBook
