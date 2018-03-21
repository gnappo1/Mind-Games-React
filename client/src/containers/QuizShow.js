import React, {Component} from 'react';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import Modal from 'react-modal';
import Social from '../components/Social';

class QuizShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      modalIsOpen: false,
      time: 0,
      score: 0,
      attempts: 0,
      bonusPoints: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.completed !== this.state.completed && this.state.completed === true) {
      this.addBonusForTime();
      this.addBonusForAttempts();
      this.openModal();
    }
  }

  addBonusForTime = () => {
    if (this.state.time <= 450 ) {
      this.setState({ bonusPoints: 50 });
    } else if ( this.state.time > 450 && this.state.time <= 900)  {
      this.setState({ bonusPoints: 25 });
    }
  }

  addBonusForAttempts = () => {
    if (this.state.attempts === 0 ) {
      this.setState({ bonusPoints: this.state.bonusPoints + 100 });
    } else if ( this.state.attempts > 0 && this.state.attempts <= 3)  {
      this.setState({ bonusPoints: this.state.bonusPoints + 70 });
    } else if ( this.state.attempts > 3 && this.state.attempts <= 6)  {
      this.setState({ bonusPoints: this.state.bonusPoints + 30 });
    }
  }

  handleCompletion = (time, attempts, score) => {
    this.setState({
      completed: true,
      time: time,
      attempts: attempts,
      score: score
    });

  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }


  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {quiz, questions} = this.props;

    return (
      <div key={quiz.id} className="quizPage">
        <QuizCard quiz={quiz} questions={questions} handleCompletion={this.handleCompletion} />
        <div className="modal">
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
                    <td>{this.state.attempts}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Time</th>
                    <td>{this.state.time / 60} min.</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Score</th>
                    <td>{this.state.score}</td>
                  </tr>
                  <tr>
                    <th scope="row">Bonus Points</th>
                    <td>{this.state.bonusPoints}</td>
                    <td>(Based on tot time and attempts)</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan="2">Final Score</th>
                    <td colSpan="2">{this.state.score + this.state.bonusPoints}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <Social />
            <button onClick={this.closeModal}>close</button>

          </Modal>
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
