import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import HowTo from './HowTo'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render((
   <Router>
      <HowTo />
   </Router>
   ), div)
   ReactDOM.unmountComponentAtNode(div);
})