import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Register from '../Register/Register'
// import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import ActivityListItem from '../ActivityListItem/ActivityListItem'
import AddActivity from '../AddActivity/AddActivity';
import ViewActivity from '../ViewActivity/ViewActivity'
import EditActivity from '../EditActivity/EditActivity'
// import { activities } from '../../../src/activities-data'
import ActivityContext from '../../ActivityContext'

// import config from '../../config'
import ActivityApiService from '../../services/activity-api-service'
import LoginPage from '../../routes/LoginPage';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'
import PrivateRoute from '../../Utils/PrivateRoute'
import './App.css'



class App extends Component {
  state = {
    error: null,
    activities: [],
    collapsed: false,
  }

  static contextType = ActivityContext

  componentDidMount(){
    ActivityApiService.getActivities()
    .then(activities => {
      this.setState({
        activities: activities
      })
    })
    .catch(error => this.setState({ error }))
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
    this.setState({
      activities: this.state.activities.map(activity => 
        (activity.id !== updatedActivity.id) ? activity : updatedActivity
      )
    })
  }

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
          {this.state.error && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path='/' component={Landing} />
            
            {/* PUBLIC ROUTES */}
            <Route path='/register' component={Register} />
            {/* <PublicOnlyRoute path='/register' component={Register} /> */}
            <Route path='/login' component={LoginPage} />
            {/* <PublicOnlyRoute path='/login' component={LoginPage} /> */}

            {/* Protected Route */}
            <Route exact path='/activity' component={ActivityListItem} />
            {/* <PrivateRoute exact path='/activity' component={ActivityListItem} /> */}
            <Route exact path='/activity/:activityId' component={ViewActivity} />
            <Route path='/edit/:activityId' component={EditActivity} />
            <Route path='/add-activity' component={AddActivity} />
            
            {/* NOT FOUND ROUTE */}
            <Route component={NotFound} />
          </Switch>
        </main>
        </ActivityContext.Provider>
      </div>
    )
  }
}

export default App;