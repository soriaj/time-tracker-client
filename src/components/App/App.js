import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import ActivityListItem from '../Activity/ActivityListItem'
import AddActivity from '../AddActivity/AddActivity';
import './App.css'


class App extends Component {
  state = { hasError: false  }

  render() {
    console.log(this.props)
    return (
      <div className='App'>
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
      </div>
    )
  }
}

export default App;