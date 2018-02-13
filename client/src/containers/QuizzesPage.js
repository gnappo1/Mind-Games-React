import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class QuizzesPage extends Component {
  render() {
    return (
      <div className="quizzesPage">
        <h1>QUIZZES</h1>
      </div>
    )
  }
}

export default QuizzesPage;
