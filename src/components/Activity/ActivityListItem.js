import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import SearchListBox from '../SearchListBox/SearchListBox'
import { format } from 'date-fns'
import './ActivityListItem.css'
import activities from '../../../src/activities-data'

class Activity extends Component {
   handleActivitySubmit = () => {
      // Should redirect to Add Activity form
      this.props.history.push('/add-activity')
   }
   render() {
      return (
         <>
            <div className="activities-list">
               <SearchListBox />
            </div>

            <div className="filterable-list">
               <div className="ListItem">
                  <div className="ListItem__icon">
                     <div className="ListItem__circle">
                        <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line"></FontAwesomeIcon>
                     </div>
                  </div>
                  <div className="ListItem__content">
                     <div className="ListItem__heading">
                        <div className="ListItem__title">Activity One Summary</div>
                        <div className="ListItem__size">{`Created: ${format(new Date(), 'MM/dd/yyyy')}`}</div>
                     </div>
                     <div className="ListItem__actions">
                        <div className="ListItem__status">
                           <p>Description of Activity .... </p>
                        </div>
                        <div className="ControlBar">
                           <div className="ControlBar__btn"><FontAwesomeIcon icon={faTrashAlt} className="fas fa-trash-alt"></FontAwesomeIcon></div>
                           <div className="ControlBar__btn"><FontAwesomeIcon icon={faUserEdit} className="fas fa-edit"></FontAwesomeIcon></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Activity;