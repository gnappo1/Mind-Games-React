import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import QuizzesList from './QuizzesList';
import QuizShow from './QuizShow';

class QuizzesPage extends Component {

  render() {
    const {match, quizzes, questions} = this.props;

    return (
      <Router >
      <div className="quizzesPage">
        <div className="quizzes-div">
          <Switch>
            <Route exact path={`${match.url}`} component={(props) => <QuizzesList {...props} quizzes={quizzes} questions={questions}/>}  />
            <Route exact path={`${match.url}/:quizId`} component={QuizShow} />
          </Switch>
        </div>
      </div>
      </Router >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizzes,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuizzesPage);
