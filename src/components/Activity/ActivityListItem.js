import React, { Component } from 'react'
import './ActivityListItem.css'
import ActivityListForm from '../ActivityListForm/ActivityListForm'
import ListItems from '../ListItems/ListItems'
import { activities } from '../../../src/activities-data'

class Activity extends Component {
   constructor(props){
      super(props) 
      this.state = {
         hasClicked: false,
         activities: [],
      }
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            activities: activities
         })
      }, 200)
   }
   
   render() {
      const { activities } = this.state
      console.log(activities)
      return (
         <>
            <div className="activities-list">
               <ActivityListForm />
            </div>

            <div className="filterable-list">
               {activities.map(items => 
                  <div className="ListItem" key={items.id}>
                     <ListItems
                        title={items.activity_title}
                        company={items.company_name}
                        customer={items.customer_name}
                        description={items.description}
                        date={items.activity_date}
                     />
                  </div>
               )}
            </div>
            {/* END LIST ACTIVITY ITEMS */}
         </>
      );
   }
}

export default Activity;