import React from 'react';
import QuestionsList from './QuestionsList';

const QuizCard = ({quiz, questions}) => {
  return (
    <div key={quiz.id} className="QuizCard">
      <h1>{quiz.name}</h1>
      <div className="QuestionsList">
        <QuestionsList questions={questions} />
      </div>
    </div>
  );
}

export default QuizCard;
