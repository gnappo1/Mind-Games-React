import React from 'react';
import QuizCard from '../containers/QuizCard';

const QuizzesList = ({quizzes}) => {

  const renderQuizzes = quizzes.map((quiz, index) =>
    <QuizCard key={index} quiz={quiz} />
  );

  return (
    <div className="col-lg-12">
      {renderQuizzes}
    </div>
  );
}

export default QuizzesList
