import React from 'react';

const QuizCard = ({ quiz }) =>

  <div id={quiz.id} className="QuizCard">
    <div>
      <img className="QuizCardImage" src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" alt={"React Logo"} />
      <h3>{quiz.name}</h3>
    </div>
  </div>

export default QuizCard
