import React, { Component } from 'react';
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './Login.css'

class Login extends Component {
   static defaultProps = {
      onLoginSuccess: () => {}
   }
   
   state = { error: null }

   handleSubmitBasicAuth = e => {
      e.preventDefault()
      const { user_name, password } = e.target
      TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value, password.value))
  
      user_name.value = ''
      password.value = ''
      this.props.onLoginSuccess()
   }

   handleSubmitJwtAuth = e => {
      e.preventDefault()
      this.setState({ error: null })
      const { user_name, password } = e.target

      AuthApiService.postLogin({
         user_name: user_name.value,
         password: password.value,
      })
      .then(res => {
         user_name.value = ''
         password.value = ''
         TokenService.saveAuthToken(res.authToken)
         this.props.onLoginSuccess()
      })
      .catch(res => {
         this.setState({ error: res.error })
      })
   }

   render() {
      const { error } = this.state
      return (         
         <form onSubmit={this.handleSubmitJwtAuth} >
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