import React from 'react';
import { Link } from 'react-router-dom';

const QuizzesList = (props) => {

  const renderQuizzes = props.quizzes.map(quiz => {
    return (
      <div key={quiz.id} className="QuizCard">
        <div>
          <img className="QuizCardImage" src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" alt={"React Logo"} />
          <Link key={quiz.id} to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>
        </div>
      </div>
    )
  });

  return (
    <div className="ui grid container">
      <div className="row">
        <div className="four wide column">
          <h5>Logic</h5>
          {renderQuizzes}
        </div>
        <div className="four wide column">
          <h5>Geography</h5>
        </div>
        <div className="four wide column">
          <h5>General Knowledge</h5>
        </div>
        <div className="four wide column">
          <h5>History</h5>
        </div>
      </div>
    </div>
  );
}

export default QuizzesList
