import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from  './SearchBook'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  search = (book) => {
    BooksAPI.search(book, 7).then((book) => {
      this.setState(state => ({
        books: state.books
      }))
    })
  }

  updateBook = (book, shelf, newbook=null) => {
    let checkbook = book
    let changeShelf = shelf
    let newBook = newbook

    if(newbook && this.state.books.filter(book => book.id === newBook.id ).length !== 1){
      this.setState(state => {
        books: state.books.push(newbook)
      })
    }

    this.setState(state => ({
      books: state.books.filter(book => book.id === checkbook.id ? book.shelf = changeShelf : book)
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path ='/search' render={() => (
          <SearchBook
            searchBooks={this.search}
            books={this.state.books}
            update={this.updateBook}
          />
        )} />

        <Route exact path='/' render={() => (
          <div>
            <ListBooks
              books={this.state.books}
              update={this.updateBook}
            />
          </div>
          )} />

        <div className="open-search">
          <Link
            to='/search'
           />
        </div>
      </div>
    )
  }
}

export default BooksApp
