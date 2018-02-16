import React, { Component } from 'react';
import {fetchQuestions} from "../actions/questions";
import { connect } from 'react-redux';


class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      questions: [],
      rows: 0
    };
  }

  handleResize(event) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }


  componentDidMount() {
    const {questions} = this.props.questions
    if (questions.length === 0) {
      this.props.fetchQuestions()
    }
    window.addEventListener('resize', this.handleResize.bind(this));
    let rows = 0;
    const questionsNumber = questions.filter(q => q.points === 1).length

    if (questionsNumber > rows) {
      rows = questionsNumber;
    }

    this.setState({rows: rows});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const {quiz, questions, windowWidth, windowHeight, rows} = this.props
    return (
      <div className="quizPage">
        <h1>{quiz.name}</h1>
        <div className="questions-div">
          <QuestionsList questions={questions}  windowWidth={windowWidth} windowHeight={windowHeight} rows={rows}/>
        </div>
      </div>
    )
  }
};


const mapStateToProps = (state, ownProps) => {
  const quiz = state.quizzes.find(quiz => quiz.id == ownProps.match.params.quizId)
  return {
    questions: state.questions,
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    rows: state.rows,
    quiz: quiz
  };
}

export default connect(mapStateToProps, {fetchQuestions})(Quiz);
