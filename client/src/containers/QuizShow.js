import React from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';

const QuizShow = ({quiz, questions}) => {
  return (
    <div className="quizPage">
      <QuizCard quiz={quiz}  questions={questions}/>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const quiz = state.quizzes.find(quiz => quiz.id === ownProps.match.params.quizId)
  const questions = state.questions.find(question => question.quiz_id === ownProps.match.params.quizId)

  if (quiz) {
    return { quiz, questions }
  } else {
    return { quiz: {}, questions: [] }
  }
}

export default connect(mapStateToProps)(QuizShow);
