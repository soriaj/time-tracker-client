import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import ListItems from '../ListItems/ListItems'
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

   updateSearchTerm = term => {
      this.setState({
         searchTerm: term
      })
   }

   updateActivitiesList = activity => {
      this.setState({
         activities: [this.state.activities, ...activity]
      })
   }

   render() {
      const { activities, searchTerm } = this.state
      return (
         <>
            <div className="activities-list">
               <SearchBox 
                  searchTerm={searchTerm}
                  handleUpdate={term => this.updateSearchTerm(term)}
                  handleActivityUpdate={this.updateActivitiesList}
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