import React, { Component } from 'react';
import TokenService from '../../services/token-service'
import './Login.css'

class Login extends Component {
   static defaultProps = {
      onLoginSuccess: () => {}
   }
   
   state = { error: null }

   handleSumbitBasicAuth = e => {
      e.preventDefault()
      const { user_name, password } = e.target

      TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value, password.value))

      user_name.value = ''
      password.value = ''
      this.props.onLoginSuccess()
   }
   handleOnSubmit = ev => {
      ev.preventDefault()
      const { user_name, password } = ev.target
      // const credentials = {
      //    user_name: user_name.value,
      //    password: password.value,
      // }
      user_name.value = ''
      password.value = ''
      this.props.history.push('/activity')
   }

   render() {
      const { error } = this.state
      return (         
         <form onSubmit={this.handleSubmitBasicAuth} >
            <div role='alert'>
               {error && <p className='red'>{error}</p>}
            </div>
            <div className="login-form">
               <h1>Login</h1>
               <hr />
               
               <label htmlFor="user_name"><b>User Name</b></label>
               <input 
                  type="text" 
                  placeholder="Enter User Name" 
                  name="user_name" 
                  className="textarea" 
                  required 
               />

               <label htmlFor="password"><b>Password</b></label>
               <input 
                  type="password" 
                  placeholder="Enter Password" 
                  name="password" 
                  className="textarea" 
                  required 
               />

               <hr />
            
               <button type="submit" className="register-btn">Sign In</button>
            </div>
         </form>
      );
   }
}

export default Login;