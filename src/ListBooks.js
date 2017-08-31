import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {

}

  render() {
    const { books, update } = this.props
    let current, want, read

    if(books.currentlyReading || books.wantToRead || books.read){
      current = this.props.books.currentlyReading
      want = this.props.books.wantToRead
      read = this.props.books.read
    }else{
      current = books.filter(book => book.shelf === "currentlyReading")
      want = books.filter(book => book.shelf === "wantToRead")
      read = books.filter(book => book.shelf === "read")
    }
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="books-shelf">
            <Book book={current}
                  shelf={"currentlyReading"}
                  onSelectBook={update}
            />
            <Book book={want}
                  shelf={"wantToRead"}
                  onSelectBook={update}
            />
            <Book book={read}
                  shelf={"read"}
                  onSelectBook={update}
            />
          </div>
        </div>
    )
  }
}

export default ListBooks
