import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import './App.css'

class App extends Component {
  state = { hasError: false }
  
  render() {
    return (
      <div className='App'>
        <Header />
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;