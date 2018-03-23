import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
              <Route exact path={`${match.path}`} render={(props) => <QuizzesList {...props} quizzes={quizzes} questions={questions}/>}  />
              <Route path={`${match.path}/:quizId`} component={QuizShow} />
              <Redirect to="/quizzes" />
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
