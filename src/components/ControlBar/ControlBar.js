import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'

class ControlBar extends Component {
   render() {
      return (
         <div className="ControlBar">
            <div className="ControlBar-btn"><FontAwesomeIcon icon={faTrashAlt} className="fas fa-trash-alt"></FontAwesomeIcon></div>
            <div className="ControlBar-btn"><FontAwesomeIcon icon={faUserEdit} className="fas fa-edit"></FontAwesomeIcon></div>
         </div>
      );
   }
}

export default ControlBar;