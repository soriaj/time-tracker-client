import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SearchBox.css'

class SearchBox extends Component {
   render() {
      return (
         <form>
            <div className="registration-form">
               <h1>Activities</h1>
               <hr />
               <label htmlFor="search"><b>Search By Company Name</b></label>
               <p className="search-filter">Type company name to filter list.</p>
               <input   
                  className="textarea" 
                  type="text" 
                  placeholder="Search ..." 
                  name="search"
                  value={this.props.searchTerm}
                  onChange={e => this.props.handleUpdate(e.target.value)}
               />
               <NavLink type="button" to="/add-activity" className="add-btn">Add Activity</NavLink>
            </div>
         </form>
      );
   }
}

export default SearchBox;