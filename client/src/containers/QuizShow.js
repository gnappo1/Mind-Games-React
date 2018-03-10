import React, {Component} from 'react';
import { connect } from 'react-redux';
import QuestionsList from './QuestionsList';

class QuizShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  handleCompletion = (event) => {
    this.setState({
      completed: true
    });
  }


  render() {
    const {quiz, questions} = this.props;
    return (
      <div className="quizPage">
        <div key={quiz.id} className="QuizCard">
          <div className="QuestionsList">
            <QuestionsList questions={questions} quiz={quiz} handleCompletion={this.handleCompletion} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const quiz = state.quizzes.find(quiz => quiz.id.toString() === ownProps.match.params.quizId)
  const questions = state.questions.filter(question => question.quiz_id.toString() === ownProps.match.params.quizId)

  if (quiz) {
    return { quiz, questions }
  } else {
    return { quiz: {}, questions: [] }
  }
}

export default connect(mapStateToProps)(QuizShow);
