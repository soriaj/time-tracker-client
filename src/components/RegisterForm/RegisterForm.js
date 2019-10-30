import React, { Component } from 'react';
import './RegisterForm.css'
import SignIn from '../SignIn/SignIn';
import AuthApiService from '../../services/auth-api-service'

class RegisterForm extends Component {
   state = { error: null }

   static defaultProps = {
      onRegistrationSuccess: () => {}
   }

   handleChangeFullName = (event) => {
      const full_name = event.target.value
      this.setState({
         full_name: full_name
      })
   }
   handleChangeEmail = (event) => {
      const email = event.target.value
      this.setState({
         email: email
      })
   }
   handleChangeUserName = (event) => {
      const user_name = event.target.value
      this.setState({
         user_name: user_name
      })
   }
   handleChangePassword = (event) => {
      const password = event.target.value
      this.setState({
         password: password
      })
   }

   handleSubmit = e => {
      e.preventDefault()
      const { full_name, user_name, password } = e.target
      this.setState({ error: null })
      
      AuthApiService.postUser({
         full_name: full_name.value,
         user_name: user_name.value,
         password: password.value,
      })
         .then(user => {
            full_name.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
         })
         .catch(res => this.setState({ error: res.error }))
   }
   render() {
      const { error } = this.state
      return (
         <div className="registration">
            <form 
               onSubmit={this.handleSubmit}
            >
               <div className="registration-form">
                  <h1>Register for free account</h1>
                  <hr />
                  <div role='alert'>
                     {error && <p className='red'>{error}</p>}
                  </div>
                  <label htmlFor="full_name"><b>Full Name</b></label>
                  <input
                     type="text" 
                     placeholder="Enter Full Name" 
                     name="full_name" 
                     required 
                  />
                  
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
               
                  <button type="submit" className="register-btn">Submit</button>
               </div>

               <SignIn />
            </form>
         </div>
      );
   }
}

export default RegisterForm;