import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './SignIn.css';

class SignIn extends Component {
   render() {
      return (
         <div className="sign-in">
            <p>Already have an account? <Link to='login'>Sign in</Link>.</p>
         </div>
      );
   }
}

export default SignIn;