import React, {Component} from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';

class QuizShow extends Component {

  render() {
    const {quiz, questions} = this.props;
    return (
      <div className="quizPage">
        <QuizCard quiz={quiz}  questions={questions}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const quiz = state.quizzes.find(quiz => quiz.id.toString() === ownProps.match.params.quizId)
  const questions = state.questions

  if (quiz) {
    return { quiz, questions }
  } else {
    return { quiz: {}, questions: [] }
  }
}

export default connect(mapStateToProps)(QuizShow); 
