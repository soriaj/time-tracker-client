import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Hamburger extends Component {
   render() {
      return (
         <div className="navbar-toggle"
            data-toggle="collapse" 
            id="js-navbar-toggle">
            <FontAwesomeIcon icon={faBars} onClick={this.props.navBarToggle} className="fas fa-bars"></FontAwesomeIcon>
         </div>
      );
   }
}

export default Hamburger;