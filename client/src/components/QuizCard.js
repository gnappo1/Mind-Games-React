import React from 'react';
import QuestionsList from '../containers/QuestionsList';
import PropTypes from 'prop-types';

const QuizCard = ({quiz, questions}) =>
  <div key={quiz.id} className="QuizCard">
    <div className="QuestionsList">
      <QuestionsList questions={questions} quiz={quiz} />
    </div>
  </div>


QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default QuizCard;
