import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import ListItems from '../ListItems/ListItems'
import './ActivityListItem.css'
import ActivityContext from '../../ActivityContext'
// import { activities } from '../../../src/activities-data'

class Activity extends Component {
   state = {
      activities: [],
      searchTerm: '',
   }
   static contextType = ActivityContext

   componentDidMount(){
      this.setState({
         activities: this.context.activities
      })
   }

   updateSearchTerm = term => {
      this.setState({
         searchTerm: term
      })
   }

   render() {
      // const { activities, searchTerm } = this.state
      const { searchTerm } = this.state
      const { activities } = this.context
      console.log(this.context)
      return (
         <>
            <div className="activities-list">
               <SearchBox 
                  searchTerm={searchTerm}
                  handleUpdate={term => this.updateSearchTerm(term)}
                  // addActivity={this.addActivity}
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