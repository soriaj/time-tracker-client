import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import AddBtn from '../../images/addBtn.png'
import AddForm from '../../images/addForm.png'
import Search01 from '../../images/search01.png'
import Search02 from '../../images/search02.png'
import ViewActivity from '../../images/viewActivity.png'
import ActivityDetails from '../../images/activityDetails.png'
import SaveEdit from '../../images/saveEdit.png'
import EditOpt1 from '../../images/editActivityOpt1.png'
import EditOpt2 from '../../images/editActivityOpt2.png'
import DeleteActivity from '../../images/deleteActivity.png'
import './HowTo.css'

class HowTo extends Component {
   render() {
      return (
         <div className="registration">
            <h1>How To Guide</h1>
            <p>Using time tracker is as easy as 1, 2, 3.</p>
            <ul>
               <li>1. Sign up for an acount</li>
               <li>2. Login to your account</li>
               <li>3. Add, Read, Edit and Delete Activities</li>
            </ul>
            <hr />
            <section>
               <h2>Sign Up For An Account</h2>
               <p>Visit the sign up page, clicking <Link to='/register'>here</Link>, then fill in the form to create a free account.</p>
            </section>
            <hr />
            <section>
               <h2>Login To Your Account</h2>
               <p>Visit the login page, clicking <Link to='/login'>here</Link>. Login with your user name and password.</p>
               <p><em>Don't feel like creating an account. Go ahead and test the application using the demo account. Details below:</em></p>
               <p><b>user name: </b>demo-user</p>
               <p><b>password: </b>Password1!</p>
            </section>
            <hr />
            <section>
               <h2>Add Activities</h2>
               <p>Once you've created an account, login to your account. On the activities page simpliy click on the <b>Add Activity</b> button. 
                  Enter in activity details and click on <b>Save</b> to submit your activity. Once saved, your activity will display on the activities page.</p>
               <div className='screenshots'>
                  <img className='screenshot-img' src={AddBtn} alt='Add Activities' />
                  <p className='img-label'>Add Activity Button</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src={AddForm} alt='Add Activities Form' />
                  <p className='img-label'>Add Activities Form</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Search For An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities list, select the <b>Search</b> bar and begin typing a company name. The list will auto filter as you type.</p>
               <div className='screenshots'>
                  <img className="screenshot-img" src={Search01} alt='Search Activity List' />
                  <p className='img-label'>Search Activity List</p>
               </div>
               <div className='screenshots'>
                  <img className="screenshot-img" src={Search02} alt='Filter Activity List' />
                  <p className='img-label'>Filter Activity List</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Read Activity Details</h2>
               <p>Once you've created an account, login to your account. From the activities list click on the activity card to view activity details. To go back to the activities page click on <b>Back.</b></p>
               <div className='screenshots'>
                  <img className="screenshot-img" src={ViewActivity} alt='View Activity Details' />
                  <p className='img-label'>View Activity Details</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src={ActivityDetails} alt='Activity Details' />
                  <p className='img-label'>Activity Details</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Edit/Update An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities page you have two ways of editing/updating an activity. <b>Option 1</b> - click on the <b>pencil/edit icon</b> as shown below. Edit/Update your activity then click <b>Save.</b></p>
               <div className='screenshots'>
                  <img className='screenshot-img' src={EditOpt1} alt='Edit/Update Activity Option 1' />
                  <p className='img-label'>Edit/Update Activity Option 1</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src={SaveEdit} alt='Save Edit/Update' />
                  <p className='img-label'>Save Edit/Update</p>
               </div>
               <p><b>Option 2</b> - read the activity details by clicking on the activity card. Then click on the <b>Edit</b> button. Make changes and/or updates then click on <b>Save.</b></p>
               <div className='screenshots'>
                  <img className="screenshot-img" src={ViewActivity} alt='View Activity Details' />
                  <p className='img-label'>View Activity Details</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src={EditOpt2} alt='Edit/Update Activity Option 2' />
                  <p className='img-label'>Edit/Update Activity Option 2</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src={SaveEdit} alt='Save Edit/Update' />
                  <p className='img-label'>Save Edit/Update</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Delete An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities list click on the <b>trash</b> icon to delete the activity. The activity will be removed from the list.</p>
               <div className='screenshots'>
                  <img className='screenshot-img' src={DeleteActivity} alt='Delete Activity' />
                  <p className='img-label'>Delete Activity</p>
               </div>
            </section>
            <hr />
         </div>
      );
   }
}

export default HowTo;