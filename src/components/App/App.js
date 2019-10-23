import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import ActivityListItem from '../ActivityListItem/ActivityListItem'
import AddActivity from '../AddActivity/AddActivity';
import EditActivity from '../EditActivity/EditActivity'
import { activities } from '../../../src/activities-data'
import ActivityContext from '../../ActivityContext'
import './App.css'


class App extends Component {
  state = {
    hasError: false,
    activities: [],
    collapsed: false,
  }

  static contextType = ActivityContext

  componentDidMount(){
    this.setState({
       activities: activities
    })
  }

  addActivity = activity => {
    this.setState({
       activities: [...this.state.activities, activity]
    })
  }

  deleteActivity = activityId => {
    const currentActivities = this.state.activities
    const newActivities = currentActivities.filter(activity => activity.id !== activityId)
    setTimeout(() => {
      this.setState({
        activities: newActivities
      })
    }, 200)
  }

  editActivity = updatedActivity => {
    // const foundActivity = activities.find(activity => activity.id == updatedActivity.id)
    // this.setState({
    //    id: foundActivity.id,
    //    summary: foundActivity.summary,
    //    company: foundActivity.company,
    //    customer_name: foundActivity.customer_name,
    //    description: foundActivity.description
    // })
    this.setState({
      activities: this.state.activities.map(activity => 
        (activity.id !== updatedActivity.id) ? activity : updatedActivity
      )
    })
  }

  // navBarToggle = () => {
  //   this.setState({
  //      collapsed: !this.state.collapsed
  //   })
  //   let mainNav = document.getElementById('js-menu');
  //   mainNav.classList.toggle('active');
  // }

  render() {
    const contextValue = {
      activities: this.state.activities,
      addActivity: this.addActivity,
      deleteActivity: this.deleteActivity,
      editActivity: this.editActivity,
    }
    return (
      <div className='App'>
        <ActivityContext.Provider value={contextValue}>
        <header>
          <Header 
            collapsed={this.state.collapsed}
            navBarToggle={this.navBarToggle}/>
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            {/* Activities Will Be Protected Route */}
            <Route exact path='/activity' component={ActivityListItem} />
            <Route path='/edit/:activityId' component={EditActivity} />
            <Route path='/add-activity' component={AddActivity} />
            <Route component={NotFound} />
          </Switch>
        </main>
        </ActivityContext.Provider>
      </div>
    )
  }
}

export default App;