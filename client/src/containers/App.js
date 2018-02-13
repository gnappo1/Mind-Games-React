import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import QuizzesPage from './QuizzesPage'
import Home from '../components/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="background-here">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path='/quizzes' component={QuizzesPage} />
        </div>
      </Router >
    );
  }
}

export default App;
