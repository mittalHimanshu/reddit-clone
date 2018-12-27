import React, { Component } from 'react';
import './App.css';
import { Form } from './components'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;
