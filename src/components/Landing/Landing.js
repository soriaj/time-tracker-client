import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Landing.css';
import SignIn from '../SignIn/SignIn';

class Landing extends Component {
   render() {
      return (
         <div className="registration">
            <h1>Welcome to Time Tracker</h1>
            <p>An application for those that want to keep track of their customer activities organized and readily availabe for review.</p>
            <p>Click buttons below to sign up for an account or see how to use the application.</p>
            <div className='btn-box'>
               
               <button className="welcome-btn">
                  <NavLink to='/register' className="sign-up-link">
                     Sign Up
                  </NavLink>
               </button>
               <button className="welcome-demo">
                  <NavLink to='/how-to' className="sign-up-link">
                     How To Use
                  </NavLink>
               </button>
            </div>
            <SignIn />
         </div>
      );
   }
}

export default Landing;
