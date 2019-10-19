import React, { Component } from 'react';
import { Link } from 'react-router-dom'
;
class Landing extends Component {
   render() {
      return (
         <div>
            <h1>Landing Page</h1>
            <Link to='/login'>Login In here</Link>      
         </div>
      );
   }
}

export default Landing;