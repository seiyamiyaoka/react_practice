import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from  './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // searchBook = BooksAPI.search(query, 7).then((book) => {
  //   this.setState({query: q})
  // })
  search = (book) => {
    BooksAPI.search(book, 7).then((book) => {
      this.setState(state => ({
        books: state.books
      }))
    })
  }

  render() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    return (
      <div className="app">
        <Route exact path ='/search' render={() => (
          <SearchBook
            searchBooks={this.search}
            books={this.state.books}
          />
        )} />

          <Route exact path='/' render={() => (
            <div>
              <ListBooks
                books={this.state.books}
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
