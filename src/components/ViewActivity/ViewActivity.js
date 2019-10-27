import React, { Component } from 'react'
import ActivityContext from '../../ActivityContext'
import ActivityApiService from '../../services/activity-api-service'
import { format } from 'date-fns'

class ViewActivity extends Component {
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
      // FETCH ACTIVTY
      const { activityId } = this.props.match.params
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
      })
      // const { activities } = this.context
      // // eslint-disable-next-line eqeqeq
      // const foundActivity = activities.find(activity => activity.id == activityId)
      // setTimeout(() => {
      //    this.setState({
      //       id: foundActivity.id,
      //       summary: foundActivity.summary,
      //       company: foundActivity.company,
      //       customer_name: foundActivity.customer_name,
      //       description: foundActivity.description,
      //       date: foundActivity.date
      //    })
      // })
   }

   renderActivity() {
      const { id, summary, company, customer_name, description, date } = this.state

      return <>
         <div className="registration">
            <div className="registration-form">
               <h2>{`Date Modified: ${date}`} </h2>
               <hr />
               <input
                  type='hidden'
                  name={id}
               />
               <label htmlFor="summary"><b>Activity Summary</b></label>
               <p>{summary}</p>

               <label htmlFor="company"><b>Company Name</b></label>
               <p>{company}</p>
               
               <label htmlFor="customer"><b>Customer Name</b></label>
               <p>{customer_name}</p>
               
               <label htmlFor="description"><b>Description</b></label>
               <p>{description}</p>
               <hr />

               <button type="submit" className="register-btn" onClick={this.handleEditActivity}>Edit</button>
               <button 
                  type="button" 
                  className="register-btn cancel-btn"
                  onClick={this.handleCancel}
               >
               Back
               </button>
            </div>
         </div>
      </>
   }

   handleEditActivity = () => {
      this.props.history.push(`/edit/${this.state.id}`)
   }

   handleCancel = () => {
      this.props.history.push('/activity')
   }
   render() {
      const { error } = this.state
      return (
         <>
         {error 
            ? <p className='red'>Activty Not Found</p>
            : this.renderActivity() }
         </>
         
      );
   }
}

export default ViewActivity;