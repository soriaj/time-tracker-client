import React, { Component } from 'react'
import { format } from 'date-fns'
import './AddActivity.css'
import ActivityContext from '../../ActivityContext'
import ActivityApiService from '../../services/activity-api-service'
import uuid from 'uuidv4'

class AddActivity extends Component {
   static defaultProps = {
      addActivity: () => {}
   }
   static contextType = ActivityContext

   state = { error: null }

   handleAddActivity = e => {
      e.preventDefault()
      const { summary, company, customer_name, description } = e.target
      const { addActivity } = this.context
      const newActivity = {
         // id: uuid(),
         summary: summary.value,
         company: company.value,
         customer_name: customer_name.value,
         description: description.value,
         // date: format(new Date(), 'MM/dd/yyyy'),   
         author_id: 1
      }
      
      this.setState({ error: null })
      ActivityApiService.addActivity(newActivity)
         .then(data => {
            summary.value = ''
            company.value = ''
            customer_name.value = ''
            description.value = ''
            addActivity(data)
            this.props.history.push('/activity')
         })
         .catch(error => this.setState({ error }))
   }

   handleCancel = () => {
      this.props.history.push('/activity')
   }

   render() {
      return (
         <div className="registration">
            <form onSubmit={this.handleAddActivity} >
               <div className="registration-form">
                  <h2>{`Date Modified: ${format(new Date(), 'MM/dd/yyyy')}`} </h2>
                  <hr />
                  <label htmlFor="summary"><b>Activity Summary</b></label>
                  <input 
                     type="text" 
                     placeholder="Enter Brief Summary" 
                     name="summary" 
                     className="textarea" 
                     required 
                  />

                  <label htmlFor="company"><b>Company Name</b></label>
                  <input type="text" placeholder="Enter company Name" name="company" className="textarea" required />
                  
                  <label htmlFor="customer_name"><b>Customer Name</b></label>
                  <input type="text" placeholder="Full Name" name="customer_name" className="textarea" required />
                  
                  <label htmlFor="description"><b>Description</b></label>
                  <textarea className="textarea" name="description" placeholder="Activity description..."></textarea>
                  <hr />

                  <button type="submit" className="register-btn">Save</button>
                  <button 
                     type="button" 
                     className="register-btn cancel-btn"
                     onClick={this.handleCancel}
                  >
                  Cancel
                  </button>
               </div>
               
            </form>
         </div>
      );
   }
}

export default AddActivity;