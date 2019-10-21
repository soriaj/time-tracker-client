import React, { Component } from 'react';
import './NotFound.css';

class Landing extends Component {
   render() {
      return (
         <div className="welcome">
            <h1>404 Page Not Found</h1>
            <p>This page does not exist. Try going back...</p>
         </div>
      );
   }
}

export default Landing;