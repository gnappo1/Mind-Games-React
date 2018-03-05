import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar';
import QuizzesPage from './QuizzesPage';
import Home from '../components/Home';
import Layout from './Layout';
import About from '../components/About'
import * as actions from '../actions/index.js';

class App extends Component {

  componentDidMount() {
    this.props.actions.getQuizzes();
    this.props.actions.fetchQuestions();
  }

  render() {
    return (
      <Router >
        <div className="background-here">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path='/quizzes' component={QuizzesPage} />
          <Route exact path='/about' component={About} />
        </div>
      </Router >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(App);
