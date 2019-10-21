import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Landing.css';
import SignIn from '../SignIn/SignIn';

class Landing extends Component {
   render() {
      return (
         <div class="welcome">
            <h1>Welcome to Time Tracker</h1>
            <p>An application for those that want to keep track of their customer acitivies organized and readily availabe for review</p>
            <div>
               <button className="welcome-btn">
                  <Link to='/register' className="sign-up-link">
                     Sign Up
                  </Link>
               </button>
            </div>
            <SignIn />
         </div>
      );
   }
}

export default Landing;