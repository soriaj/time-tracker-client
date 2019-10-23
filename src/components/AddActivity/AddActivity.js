import React, { Component } from 'react'
import { format } from 'date-fns'
import './AddActivity.css'
import ActivityContext from '../../ActivityContext'

class AddActivity extends Component {
   static contextType = ActivityContext

   handleSubmitAddActivity = ev => {
      ev.preventDefault()
      alert('You added a activity')
   }

   handleCancel = () => {
      this.props.history.push('/activity')
   }

   render() {
      console.log(this.context)
      return (
         <div className="registration">
            <form onSubmit={this.handleSubmitAddActivity} >
               <div className="registration-form">
                  <h2>{`Date Modified: ${format(new Date(), 'MM/dd/yyyy')}`} </h2>
                  <hr />
                  <label htmlFor="title"><b>Activity Title</b></label>
                  <input type="text" placeholder="Enter Activity Title" name="title" className="textarea" required />

                  <label htmlFor="company"><b>Company Name</b></label>
                  <input type="text" placeholder="Enter company Name" name="company" className="textarea" required />
                  
                  <label htmlFor="contact"><b>Customer Name</b></label>
                  <input type="text" placeholder="Full Name" name="contact" className="textarea" required />
                  
                  <label htmlFor="description"><b>Description</b></label>
                  <textarea className="textarea" placeholder="Activity description..."></textarea>
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