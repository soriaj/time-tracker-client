import React, { Component } from 'react'
import SearchListBox from '../SearchListBox/SearchListBox'
import ListItems from '../ListItems/ListItems'
import { format } from 'date-fns'
import './ActivityListItem.css'
import { activities } from '../../../src/activities-data'

class Activity extends Component {
   state = {
      activities: [],
      searchTerm: '',
   }

   componentDidMount(){
      setTimeout(() => {
         this.setState({
            activities: activities
         })
      })
   }
   handleActivitySubmit = () => {
      // Should redirect to Add Activity form
      this.props.history.push('/add-activity')
   }
   render() {
      const { activities, searchTerm } = this.state
      return (
         <>
            <div className="activities-list">
               <SearchListBox />
            </div>

            <div className="filterable-list">
               {activities.map(items => 
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