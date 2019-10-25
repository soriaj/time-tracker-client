import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import ActivityContext from '../../ActivityContext'
import ActivityApiService from '../../services/activity-api-service'
import './ControlBar.css'

class ControlBar extends Component {
   static contextType = ActivityContext

   handleDeleteActivity = e => {
      e.stopPropagation()
      const activityId = this.props.id
      const { deleteActivity } = this.context
      ActivityApiService.deleteActivity(activityId)
         .then(() => {
            deleteActivity(activityId)
            this.props.history.push('/activity')
         })
         .catch(error => console.log(error))
   }

   handleEditActivity = e => {
      e.stopPropagation()
      this.props.history.push(`/edit/${this.props.id}`)
   }

   render() {
      // console.log(this.props)
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
               <FontAwesomeIcon 
                  icon={faUserEdit}
                  className="fas fa-edit"
                  onClick={e => this.handleEditActivity(e)}
               >   
               </FontAwesomeIcon>
            </div>
         </div>
      );
   }
}

export default ControlBar;