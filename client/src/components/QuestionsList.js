import React from 'react';
import Question from '../containers/Question';
import Headers from "./Headers";

const QuestionsList = ({questions}) => {

//  const cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

  //let headerHeight = windowWidth > 640 ? 60 : 32,
  //    cardWidth = windowWidth / cols.length,
  //    cardHeight = (windowHeight - headerHeight) / rows,
  //    cards = [];
//
  //cols.forEach((category, categoryIndex) => {
  //  let left = categoryIndex * cardWidth;
  //  let categoryQuestions = questions.filter(question => question.points === category[0])
  //  categoryQuestions.forEach((question, questionIndex) => {
  //    cards.push(<Question left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={questionIndex}/>);
  //  })
  //});

  const onePoint = questions.filter(question => {
    return question.points === 1
  })

  const threePoints = questions.filter(question => {
    return question.points === 3
  })

  const fivePoints = questions.filter(question => {
    return question.points === 5
  })

  const sevenPoints = questions.filter(question => {
    return question.points === 7
  })

  const onePointQuestions = onePoint.map(question => {
    return (
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
    )
  });

  const threePointQuestions = threePoints.map(question => {
    return (
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
    )
  });

  const fivePointQuestions = fivePoints.map(question => {
    return (
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
    )
  });

  const sevenPointQuestions = sevenPoints.map(question => {
    return (
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
    )
  });

  return (
    <div className="ui grid container">
      <div className="row">
        <div className="four wide column">
          <h5>1 POINT</h5>
          {onePointQuestions}
        </div>
        <div className="four wide column">
          <h5>3 POINTS</h5>
          {threePointQuestions}
        </div>
        <div className="four wide column">
          <h5>5 POINTS</h5>
          {fivePointQuestions}
        </div>
        <div className="four wide column">
          <h5>7 POINTS</h5>
          {sevenPointQuestions}
        </div>
      </div>
    </div>
  );
}

export default QuestionsList
