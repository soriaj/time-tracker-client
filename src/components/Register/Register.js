import React, { Component } from 'react';
import './Register.css'
import SignIn from '../SignIn/SignIn';

class Register extends Component {
   constructor(props){
      super(props)
      this.state = { 
         error: null,
      }
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
      const { full_name, email, user_name, password, password_repeat } = e.target

      const registerData = {
         full_name: full_name.value,
         email: email.value,
         user_name: user_name.value,
         password: password.value,
      }
      // console.log(dregisterData)
      full_name.value = ''
      email.value = ''
      user_name.value = ''
      password.value = ''
      password_repeat.value = ''
      this.props.history.push('/login')
   }
   render() {
      const { error } = this.state
      return (
         <div className="registration">
            <form 
               onSubmit={this.handleSubmit}
            >
               <div role='alert'>
                  {error && <p className='red'>{error}</p>}
               </div>
               <div className="registration-form">
                  <h1>Register for free account</h1>
                  <hr />
                  <label htmlFor="full_name"><b>Full Name</b></label>
                  <input
                     type="text" 
                     placeholder="Enter Full Name" 
                     name="full_name" 
                     className="textarea"
                     // value={this.state.full_name}
                     // onChange={this.handleChangeFullName}
                     required 
                  />
                  
                  <label htmlFor="email"><b>Email</b></label>
                  <input 
                     type="text" 
                     placeholder="name@domain.com" 
                     name="email" 
                     className="textarea" 
                     // value={this.state.email}
                     // onChange={this.handleChangeEmail}
                     required 
                  />
                  
                  <label htmlFor="user_name"><b>User Name</b></label>
                  <input 
                     type="text" 
                     placeholder="Enter User Name" 
                     name="user_name" 
                     className="textarea"
                     // value={this.state.user_name}
                     // onChange={this.handleChangeUserName}
                     required 
                  />

                  <label htmlFor="password"><b>Password</b></label>
                  <input 
                     type="password" 
                     placeholder="Enter Password" 
                     name="password" 
                     className="textarea" 
                     // value={this.state.password}
                     // onChange={this.handleChangePassword}
                     required 
                  />
               
                  <label htmlFor="password_repeat"><b>Repeat Password</b></label>
                  <input 
                     type="password" 
                     placeholder="Repeat Password" 
                     name="password_repeat" 
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

export default Register;