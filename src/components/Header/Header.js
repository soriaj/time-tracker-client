import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faBars } from '@fortawesome/free-solid-svg-icons'
// import TokenService from '../../services/token-service'
import './Header.css'

class Header extends Component {
   state = {
      active: false,
      collapsed: true,
   }

   handleLogoutClick =() => {
      this.props.history.push('/login')
   }

   navBarToggle = () => {
      this.setState({
         collapsed: !this.state.collapsed
      })
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
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
      // const collapsed = this.state.collapsed
      // console.log(collapsed)
      return (
         <>
         <nav role='navigation' className="navbar">
            <div className="navbar-toggle"
               data-toggle="collapse" 
               id="js-navbar-toggle"
               // onClick={this.navBarToggle}
            >
               <FontAwesomeIcon icon={faBars} onClick={this.navBarToggle} className="fas fa-bars"></FontAwesomeIcon>
            </div>
            {/* <NavLink to="/" className="logo"> */}
            <div className="logo">
               <FontAwesomeIcon icon={faUserClock} className="fas fa-user-clock">
               </FontAwesomeIcon>
               Time Tracker
            </div>
            {/* </NavLink> */}
            {true
               ? this.renderLogoutLink()
               : this.renderLoginLink()
            }
         </nav>
      </>
      )
   }
}

export default Header