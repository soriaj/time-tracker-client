import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faBars } from '@fortawesome/free-solid-svg-icons'
// import TokenService from '../../services/token-service'
import './Header.css'

class Header extends Component {
   handleLogoutClick() {
      alert('Logout Clicked')
   }

   renderLogoutLink() {
      return (
         <ul className="main-nav" id="js-menu">
            <li>
               <Link 
                  to='/login' 
                  onClick={this.handleLogoutClick}
                  className="nav-links">
                  Logout
               </Link>
            </li>
         </ul>
      )
   }

   renderLoginLink() {
      return (
         <ul className="main-nav" id="js-menu">
            <li>
               <Link to='/register' className="nav-links">Sign Up</Link>
            </li>
            <li>
               <Link to='/login' className="nav-links">Login</Link>
            </li>
         </ul>

      )
   }

   render() {
      return <>
         <nav role='navigation' className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
               <FontAwesomeIcon icon={faBars} className="fas fa-bars"></FontAwesomeIcon>
            </span>
            <Link to="/" className="logo">
               <FontAwesomeIcon icon={faUserClock} className="fas fa-user-clock">
               </FontAwesomeIcon>
               Time Tracker
            </Link>
            {false
               ? this.renderLogoutLink()
               : this.renderLoginLink()
            }
         </nav>
      </>

   }
}

export default Header