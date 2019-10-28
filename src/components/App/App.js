import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage'
import RegisterPage from '../../routes/RegisterPage'
import NotFound from '../NotFound/NotFound'
import ActivityListItem from '../ActivityListItem/ActivityListItem'
import AddActivity from '../AddActivity/AddActivity';
import ViewActivity from '../ViewActivity/ViewActivity'
import EditActivity from '../EditActivity/EditActivity'
import ActivityContext from '../../ActivityContext'
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

  setActivityList = activityList => {
    this.setState({ activities: activityList })
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
      setActivityList: this.setActivityList,
    }
    return (
      <div className='App'>
        <ActivityContext.Provider value={contextValue}>
        <header>
          <Header history={this.props.history}/>
        </header>
        <main className='App__main'>
          {this.state.error && <p className='red'>There was an error! Oh no!</p>}
          
          <Switch>
            <Route exact path='/' component={LandingPage} />
            
            {/* PUBLIC ROUTES */}
            <PublicOnlyRoute path='/register' component={RegisterPage} />
            <PublicOnlyRoute path='/login' component={LoginPage} />
            
            {/* Protected Route */}
            <PrivateRoute exact path='/activity' component={ActivityListItem} />
            <PrivateRoute path='/activity/:activityId' component={ViewActivity} />
            <PrivateRoute path='/edit/:activityId' component={EditActivity} />
            <PrivateRoute path='/add-activity' component={AddActivity} />
             
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