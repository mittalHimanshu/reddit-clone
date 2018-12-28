import React, { Component } from 'react'
import './App.css'
import { Form, Posts} from './components'
import {Route} from 'react-router-dom'
import { withCookies } from 'react-cookie'


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render= {() => <Form cookies={this.props.cookies} />}  />
        <Route exact path='/posts' render={() => <Posts cookies={this.props.cookies} />} />
      </div>
    );
  }
}

export default withCookies(App)
