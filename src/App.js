import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
