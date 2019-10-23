import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SearchListBox.css'

class SearchListBox extends Component {
   render() {
      return (
         <form>
            <div className="registration-form">
               <h1>Activities</h1>
               <hr />
               <label htmlFor="search"><b>Search By Company</b></label>
               <input   
                  className="textarea" 
                  type="text" 
                  placeholder="Search ..." 
                  name="search"
                  value={this.props.searchTerm}
                  onChange={e => this.props.handleUpdate(e.target.value)}
               />
            
               {/* <button type="button" onClick={this.handleActivitySubmit} className="add-btn">Add Activity</button> */}
               <NavLink type="button" to="/add-activity" className="add-btn">Add Activity</NavLink>
            </div>
         </form>
      );
   }
}

export default SearchListBox;