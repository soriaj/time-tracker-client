import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import './index.css';
import activities from '../src/activities-data'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
   <Router>
      <App activities={activities} />
   </Router>
   , document.getElementById('root')
);