import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ActivityListItem from './ActivityListItem'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render((
      <Router>
         <ActivityListItem />
      </Router>
   ), div)
   ReactDOM.unmountComponentAtNode(div);
})