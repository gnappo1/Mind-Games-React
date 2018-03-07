import React from 'react';
import QuestionsList from '../containers/QuestionsList';

const QuizCard = ({quiz, questions}) =>
  <div key={quiz.id} className="QuizCard">
    <h1>{quiz.name}</h1>
    <div className="QuestionsList">
      <QuestionsList questions={questions} quiz={quiz} />
    </div>
  </div>

export default QuizCard;
