import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import News from './components/news'
import Newsdetail from './components/newsdetail'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={News} />
            <Route path="/:id" component={Newsdetail} />
          </div>
        </Router>
    );
  }
}

export default App;
