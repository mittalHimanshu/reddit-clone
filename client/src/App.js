import React, { Component } from 'react'
import './App.css'
import { Form, Posts} from './components'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Route exact path='/' component={Form} />
            <Route exact path='/posts' render={() => <Posts />} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App
