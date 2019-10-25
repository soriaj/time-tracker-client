import React, { Component } from 'react';
import { format } from 'date-fns'
import ActivityContext from '../../ActivityContext'
import ActivityApiService from '../../services/activity-api-service'

class EditActivity extends Component {
   static defaultProps = {
      editActivity: () => {}
   }

   state = {
      id: '',
      summary: '',
      company: '',
      customer_name: '',
      description: '',
      date: '',
      error: null,
   }

   static contextType = ActivityContext

   componentDidMount(){
      const { activityId } = this.props.match.params
      // const { activities } = this.context
      ActivityApiService.getActivity(activityId)
         .then(activity => {
            this.setState({
               id: activity.id,
               summary: activity.summary,
               company: activity.company,
               customer_name: activity.customer_name,
               description: activity.description,
               date: activity.date
            })
            .catch(error => this.setState({ error: error }))
      })
      // eslint-disable-next-line eqeqeq
      // const foundActivity = activities.find(activity => activity.id == activityId)
      // this.setState({
      //    id: foundActivity.id,
      //    summary: foundActivity.summary,
      //    company: foundActivity.company,
      //    customer_name: foundActivity.customer_name,
      //    description: foundActivity.description
      // })
   }

   handleChangeSummary = e => {
      this.setState({ summary: e.target.value })
   }

   handleChangeCompany = e => {
      this.setState({ company: e.target.value })
   }

   handleChangeCustomer = e => {
      this.setState({ customer_name: e.target.value })
   }

   handleChangeDescription = e => {
      this.setState({ description: e.target.value })
   }

   handleEditActivity = e => {
      e.preventDefault()
      const activityId = this.props.match.params.id

      const { id, summary, company, customer_name, description } = this.state
      const { editActivity } = this.context
      const updatedActivity = {
         id,
         summary,
         company,
         customer_name,
         description,
         date: format(new Date(), 'MM/dd/yyyy')
      }
      
      editActivity(updatedActivity)
      this.props.history.push('/activity')
   }

   handleCancel = () => {
      this.props.history.push('/activity')
   }

   render() {
      const { summary, company, customer_name, description } = this.state
      return (
         <div className="registration">
            <form onSubmit={this.handleEditActivity} >
               <div className="registration-form">
                  <h2>{`Date Modified: ${format(new Date(), 'MM/dd/yyyy')}`} </h2>
                  <hr />
                  <input
                     type='hidden'
                     name='id'
                  />
                  <label htmlFor="summary"><b>Activity Summary</b></label>
                  <input 
                     type="text" 
                     placeholder="Enter Brief Summary" 
                     name="summary" 
                     className="textarea"
                     value={summary}
                     onChange={this.handleChangeSummary} 
                     required 
                  />

                  <label htmlFor="company"><b>Company Name</b></label>
                  <input 
                     type="text" 
                     placeholder="Enter company Name" 
                     name="company" 
                     className="textarea" 
                     value={company}
                     onChange={this.handleChangeCompany} 
                     required 
                  />
                  
                  <label htmlFor="customer"><b>Customer Name</b></label>
                  <input 
                     type="text" 
                     placeholder="Full Name" 
                     name="customer" 
                     className="textarea" 
                     value={customer_name}
                     onChange={this.handleChangeCustomer} 
                     required 
                  />
                  
                  <label htmlFor="description"><b>Description</b></label>
                  <textarea 
                     className="textarea" 
                     name="description" 
                     placeholder="Activity description..."
                     value={description}
                     onChange={this.handleChangeDescription} 
                     ></textarea>
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

export default EditActivity;