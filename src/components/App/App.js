import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import ActivityListItem from '../Activity/ActivityListItem'
import AddActivity from '../AddActivity/AddActivity';
import { activities } from '../../../src/activities-data'
import ActivityContext from '../../ActivityContext'
import './App.css'


class App extends Component {
  state = {
    hasError: false,
    activities: [],
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

  render() {
    const contextValue = {
      activities: this.state.activities,
      addActivity: this.addActivity,
      deleteActivity: this.deleteActivity,
    }
    return (
      <div className='App'>
        <ActivityContext.Provider value={contextValue}>
        <header>
          <Header />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            {/* Activities Will Be Protected Route */}
            <Route path='/activity' component={ActivityListItem} />
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