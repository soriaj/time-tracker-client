import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../../services/token-service'
import Hamburger from '../Hamburger/Hamburger'
import './Header.css'

class Header extends Component {
   state = {
      active: true,
      hasToken: TokenService.hasAuthToken()
   }

   handleLogoutClick =() => {
      TokenService.clearAuthToken()
      this.setState({
         hasToken: TokenService.hasAuthToken()
      })
      this.navBarToggle()
   }

   navBarToggle = () => {
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
   }

   renderLogoutLink() {
      return (
         <>
          <div className="logo">
               <Link to='/' className='logo-btn' ><FontAwesomeIcon icon={faUserClock} className="fas fa-user-clock">
               </FontAwesomeIcon></Link>
               {' '}
         </div>
         <ul className="main-nav" id="js-menu">
            <li>
               <Link to='/how-to' onClick={this.navBarToggle} className="nav-links">How To</Link>
            </li>
            <li>
               <Link 
                  to='/login' 
                  onClick={this.handleLogoutClick}
                  className="nav-links">
                  Logout
               </Link>
            </li>
         </ul>
         </>
      )
   }

   renderLoginLink() {
      return (
         <>
         <div className="logo">
               <Link to='/' className='logo-btn' ><FontAwesomeIcon icon={faUserClock} className="fas fa-user-clock">
               </FontAwesomeIcon></Link>
               {' '}
         </div>
         <ul className="main-nav" id="js-menu">
            <li>
               <Link to='/how-to' onClick={this.navBarToggle} className="nav-links">How To</Link>
            </li>
            <li>
               <Link to='/register' onClick={this.navBarToggle} className="nav-links">Sign Up</Link>
            </li>
            <li>
               <Link to='/login' onClick={this.navBarToggle} className="nav-links">Login</Link>
            </li>
         </ul>
         </>

      )
   }

   render() {
      return (
         <>
         <nav role='navigation' className="navbar">
            <Hamburger navBarToggle={this.navBarToggle}/>
            {TokenService.hasAuthToken() 
               ? this.renderLogoutLink()
               : this.renderLoginLink()
            }
         </nav>
      </>
      )
   }
}

export default Header