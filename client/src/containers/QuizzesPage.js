import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {getQuizzes} from '../actions/quizzes';
import QuizzesList from '../components/QuizzesList';
import Quiz from './Quiz';

class QuizzesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
            <Route path={`${match.url}/:quizzId`} component={Quiz} />
            <Route exact path={match.url} render={() => (
              <h3>Please select a Quiz from the list.</h3>
            )}/>
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
