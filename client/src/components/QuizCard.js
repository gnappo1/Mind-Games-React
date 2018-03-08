import React from 'react';
import QuestionsList from '../containers/QuestionsList';

const QuizCard = ({quiz, questions}) =>
  <div key={quiz.id} className="QuizCard">
    <div className="QuestionsList">
      <QuestionsList questions={questions} quiz={quiz} />
    </div>
  </div>

export default QuizCard;
