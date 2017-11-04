import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header>
       <nav className="navbar navbar-inverse">
       <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to='/'>Home</Link>
              
            </div>
            <ul className="nav navbar-nav">
              <li className="active"></li>
              <li><Link to='/books/all'>All books</Link></li>
              <li>   <Link to='/authors/all'>All authors</Link></li>
              <li><a href="#">About</a></li>
            </ul>
       </div>
     </nav>
        <div className="jumbotron">
            <div className="container text-center">
                  <h1>Boooks, App!</h1>
                  <p>Nguyen Thanh Thinh</p>
                  <p>
                  <Link className="btn btn-primary btn-lg" to='/'>Book Store</Link>
                 
                  </p>
            </div>
        </div>
    
      </header>
    )
  }
}





