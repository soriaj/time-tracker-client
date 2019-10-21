import React, { Component } from 'react';
import './Register.css'
import SignIn from '../SignIn/SignIn';

class Register extends Component {
   render() {
      return (
         <div className="registration">
            <form >
               <div className="registration-form">
                  <h1>Register for free account</h1>
                  <hr />
                  <label for="name"><b>Full Name</b></label>
                  <input type="text" placeholder="Enter Full Name" name="name" className="textarea" required />
                  
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="name@domain.com" name="email" className="textarea" required />
                  
                  <label for="username"><b>User Name</b></label>
                  <input type="text" placeholder="Enter User Name" name="username" className="textarea" required />

                  <label for="password"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="password" className="textarea" required />
               
                  <label for="password-repeat"><b>Repeat Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="password-repeat" className="textarea" required />
                  <hr />
               
                  <button type="submit" className="register-btn">Register</button>
               </div>

               <SignIn />
            </form>
         </div>
      );
   }
}

export default Register;