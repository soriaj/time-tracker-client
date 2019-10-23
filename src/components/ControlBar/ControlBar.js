import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import ActivityContext from '../../ActivityContext'
import './ControlBar.css'

class ControlBar extends Component {
   static contextType = ActivityContext

   handleDeleteActivity = () => {
      const activityId = this.props.id
      const { deleteActivity } = this.context
      deleteActivity(activityId)
   }
   render() {
      return (
         <div className="ControlBar">
            <div className="ControlBar-btn">
               <FontAwesomeIcon 
                  icon={faTrashAlt} 
                  className="fas fa-trash-alt"
                  onClick={e => this.handleDeleteActivity(e)}
               >
               </FontAwesomeIcon>
            </div>
            <div className="ControlBar-btn">
               <FontAwesomeIcon icon={faUserEdit} className="fas fa-edit"></FontAwesomeIcon>
            </div>
         </div>
      );
   }
}

export default ControlBar;