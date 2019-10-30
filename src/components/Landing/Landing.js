import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Landing.css';
import SignIn from '../SignIn/SignIn';

class Landing extends Component {
   render() {
      return (
         <div className="registration">
            <h1>Welcome to Time Tracker</h1>
            <p>An application for those that want to keep track of their customer activties organized and readily availabe for review</p>
            <div>
               <button className="welcome-btn">
                  <NavLink to='/register' className="sign-up-link">
                     Sign Up
                  </NavLink>
               </button>
            </div>
            <SignIn />
         </div>
      );
   }
}

export default Landing;
