import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import RegisterForm from './RegisterForm'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render((
   <Router>
      <RegisterForm />
   </Router>
   ), div)
   ReactDOM.unmountComponentAtNode(div);
})