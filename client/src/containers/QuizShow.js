import React, {Component} from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import {Modal} from 'react-modal';
import Social from '../components/Social';

class QuizShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      modalIsOpen: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.completed !== this.state.completed && this.state.completed === true) {
      this.openModal();
    }
  }

  handleCompletion = (event) => {
    this.setState({
      completed: true
    });
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  //afterOpenModal= () => {
  //  this.subtitle.style.color = '#f00';
  //}

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {quiz, questions} = this.props;
    return (
      <div className="quizPage">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <h2>Hey you, good job!</h2>
          <div className="score-summary">
            <h3>Here is your Final Score: </h3>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Questions</th>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">Incorrect Answers</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Total Time</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Bonus Points</th>
                  <td></td>
                  <td>(Based on your total time)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan="2">Total Points</th>
                  <td colSpan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <Social />
          <button onClick={this.closeModal}>close</button>

        </Modal>
        <QuizCard quiz={quiz} questions={questions} handleCompletion={this.handleCompletion} />
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
