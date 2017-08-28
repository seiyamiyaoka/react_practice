import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  state = {
    books: []
  }


  render() {
    return (
      <div className="bookshelf-books">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <ol className="books-grid">
          {this.props.book.map((book) => (
            <li>
              <div key={book.id} className="book">
                <div className="book-top">
                  <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}} > </div>
                  <div className="book-shelf-changer">
                    <select onChange={(event) => this.props.onSelectBook(book, event.target.value)}>
                      <option value="none">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}


export default Book
