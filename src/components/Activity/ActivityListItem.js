import React, { Component } from 'react'
import './ActivityListItem.css'
import SearchListBox from '../SearchListBox/SearchListBox'
import ListItems from '../ListItems/ListItems'
import { activities } from '../../../src/activities-data'

class Activity extends Component {
   constructor(props){
      super(props) 
      this.state = {
         hasClicked: false,
         activities: [],
         searchTerm: '',
      }
   }

   updateSearchTerm(term) {
      console.log(term)
      this.setState({
        searchTerm: term
      })
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
      // const list = activities.filter(act => act.company.includes(this.state.searchTerm))
      return (
         <>
            <div className="activities-list">
               <SearchListBox 
                  searchTerm={this.state.searchTerm}
                  handleUpdate={term => this.updateSearchTerm(term)}
               />
            </div>

            <div className="filterable-list">
               {/* <ListItems 
                  searchTerm={this.state.searchTerm}
                  activity={activities}
               /> */}
               {activities.map(items => 
                  <div className="ListItem" key={items.id}>
                     <ListItems
                        searchTerm={this.state.searchTerm}
                        title={items.activity_title}
                        company={items.company_name}
                        customer={items.customer_name}
                        description={items.description}
                        date={items.activity_date}
                     />
                  </div>
               )}
            </div>
         </>
      );
   }
}

export default Activity;