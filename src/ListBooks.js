import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.setState({ books })
    })
  }

  render() {
    let showingCurrentBooks, showingWantBooks, showingReadBooks;

    showingCurrentBooks = this.props.books.filter(book => book.shelf === "currentlyReading")
    showingWantBooks = this.props.books.filter(book => book.shelf === "wantToRead")
    showingReadBooks = this.props.books.filter(book => book.shelf === "read")

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="books-shelf">
            <Book book={showingCurrentBooks}
                  shelf={"currentlyReading"}
                  onSelectBook={this.updateBook}
            />
            <Book book={showingWantBooks}
                  shelf={"wantToRead"}
                  onSelectBook={this.updateBook}
            />
            <Book book={showingReadBooks}
                  shelf={"read"}
                  onSelectBook={this.updateBook}
            />
          </div>
        </div>
    )
  }
}

export default ListBooks
