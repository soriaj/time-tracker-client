import React, { Component } from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    console.log(this.props)
    return (
      <div className='RegisterPage'>
        <RegisterForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    )
  }
}
