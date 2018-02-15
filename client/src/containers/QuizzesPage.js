import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {getQuizzes} from '../actions/quizzes';

class QuizzesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        quizzes: []
    };
  }

  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    const {match, quizzes} = this.props
    return (
      <div className="quizzesPage">
        <h1>QUIZZES</h1>
        <div className="quizzes-div">
          <QuizzesList quizzes={quizzes} />
          <Switch>
            <Route path={`${match.url}/:quizzId`} component={QuizCard} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {quizzes: state.quizzes}
}

export default connect(mapStateToProps, {getQuizzes})(QuizzesPage);
