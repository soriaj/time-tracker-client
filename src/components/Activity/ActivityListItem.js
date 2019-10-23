import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import ListItems from '../ListItems/ListItems'
import './ActivityListItem.css'
import ActivityContext from '../../ActivityContext'
// import { activities } from '../../../src/activities-data'

class Activity extends Component {
   static contextType = ActivityContext
   
   state = {
      activities: [],
      searchTerm: '',
   }

   updateSearchTerm = term => {
      this.setState({
         searchTerm: term
      })
   }

   render() {
      const { searchTerm } = this.state
      const { activities } = this.context
      return (
         <>
            <div className="activities-list">
               <SearchBox 
                  searchTerm={searchTerm}
                  handleUpdate={term => this.updateSearchTerm(term)}
               />
            </div>

            <div className="filterable-list">
               {activities.filter(activity => activity.company.toLowerCase().includes(searchTerm.toLowerCase()))
               .map(items => 
                  <ListItems key={items.id} 
                     company={items.company}
                     title={items.summary}
                     name={items.customer}
                     description={items.description}
                     date={items.date}
                  />
               )}
            </div>
         </>
      );
   }
}

export default Activity;