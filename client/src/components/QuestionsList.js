import React from 'react';
import Question from '../containers/Question';
import Headers from "./Headers";

const QuestionsList = ({questions, windowWidth, windowHeight, rows}) => {

  const cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

  let headerHeight = windowWidth > 640 ? 60 : 32,
      cardWidth = windowWidth / cols.length,
      cardHeight = (windowHeight - headerHeight) / rows,
      cards = [];

  cols.forEach((category, categoryIndex) => {
    let left = categoryIndex * cardWidth;
    let categoryQuestions = questions.filter(question => question.points === category[0])
    categoryQuestions.forEach((question, questionIndex) => {
      cards.push(<Question left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={cquestionIndex}/>);
    })
  });

  return (
    <div>
        <Headers data={cols} headerWidth={cardWidth}/>
        {cards}
    </div>
  );
}

export default QuestionsList
