import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import './Activity.css'

class Activity extends Component {
   handleActivitySubmit() {
      // Should redirect to Add Activity form
      alert('Add an Activity')
   }
   render() {
      return (
         <>
            <div class="activities-list">
               <form>
                  <div class="registration-form">
                     <h1>Activities</h1>
                     <hr />
                     <label htmlFor="search"><b>Search Your Activities</b></label>
                     <input type="text" placeholder="Search ..." name="search" class="textarea" />
                  
                     <button type="button" onClick={this.handleActivitySubmit} class="add-btn">Add Activity</button>
                  </div>
               </form>
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
                        <div className="ListItem__size">Date Created</div>
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
            {/* END LIST ACTIVITY ITEMS */}
         </>
      );
   }
}

export default Activity;