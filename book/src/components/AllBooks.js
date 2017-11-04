import data from '../Data'
import React from 'react'
import {Link} from 'react-router-dom'

export default class AllBooks extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    data.getBooks().then(books => {
      books = books.sort((a, b) => new Date(a.date) - new Date(b.date))
      let authorsPromises = []
      for (let book of books) {
        authorsPromises.push(data.getAuthorByBook(book.id))
      }

      Promise.all(authorsPromises).then(authors => {
        for (let author of authors) {
          for (let book of books) {
            if (author.books.indexOf(book.id) > -1) {
              book.authorName = author.name
            }
          }
        }

        this.setState({
          books: books
        })
      })
    })
  }

  sortByDate () {
    this.setState(prevState => ({
      books: prevState.books.sort((a, b) => new Date(a.date) - new Date(b.date))
    }))
  }

  sortByAuthor () {
    this.setState(prevState => ({
      books: prevState.books.sort((a, b) => a.authorName.localeCompare(b.authorName))
    }))
  }

  sortByTitle () {
    this.setState(prevState => ({
      books: prevState.books.sort((a, b) => a.title.localeCompare(b.title))
    }))
  }

  render () {
    let bookNodes = this.state.books.map(b => {
      return (
        <div className='book' key={b.id}>
          <Link to={`/books/${b.id}`}>
            <img src={b.image} alt='cover' />
            <h3>{b.title}</h3>
          </Link>
          <p>Author: <Link to={`/authors/${b.author}`}>{b.authorName}</Link></p>
        </div>
      )
    })

    return (
      <div>
      
        <h4>  <span class="label label-primary">All Books:</span></h4>
        <h3>Sort:
        <ul class="nav nav-pills">
        <li className="active"><a href="#" onClick={this.sortByDate.bind(this)}>Date</a></li>
       
        <li><a href="#" onClick={this.sortByAuthor.bind(this)}>Author</a></li>
        <li><a href="#" onClick={this.sortByTitle.bind(this)}>Title</a></li>
      </ul>
         
        </h3>
        {bookNodes}
      </div>
    )
  }
}