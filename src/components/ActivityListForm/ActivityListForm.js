import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import './ActivityListForm.css'

class ActivityListForm extends Component {
   render() {
      return (
         <form>
            <div className="registration-form">
               <h1>Activities</h1>
               <hr />
               <label htmlFor="search"><b>Search Your Activities</b></label>
               <input type="text" placeholder="Search ..." name="search" className="textarea" />
            
               {/* <button type="button" onClick={this.handleActivitySubmit} className="add-btn">Add Activity</button> */}
               <NavLink type="button" to="/add-activity" className="add-btn">Add Activity</NavLink>
            </div>
         </form>
      );
   }
}

export default ActivityListForm;