import React, {Component} from 'react';
import Question from './Question';
import PropTypes from 'prop-types';

class QuestionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      completedCount: 0,
      totAttempts: 0,
      totTime: 0,
      totScore: 0
    };
  }

  handleResize = (event) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  updateTimeOnSuccess = (time) => {
    this.setState({
      totTime: this.state.totTime + time
    });
  }

  updateScoreOnSuccess = (score) => {
    this.setState({
      totScore: this.state.totScore + score
    });
  }

  updateAttemptsOnFail = (event) => {
    this.setState({
      totAttempts: this.state.totAttempts + 1
    });
  }

  handleQuestionCompleted = (event) => {
    this.setState({
      completedCount: this.state.completedCount + 1
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.completedCount !== this.state.completedCount && this.state.completedCount === 20) {
       this.props.handleCompletion(this.state.totTime, this.state.totAttempts, this.state.totScore);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      cardWidth = this.state.windowWidth / 4,
      cardHeight = (this.state.windowHeight - headerHeight - 69) / 5,
      cards = [],
      headers = [];

    cols.forEach((category, categoryIndex) => {
      headers.push(<span className='header' key={categoryIndex}>{category}</span>);

      let left = categoryIndex * cardWidth,
          categoryQuestions = this.props.questions.filter(question => question.points.toString() === category[0])
      categoryQuestions.forEach((question, questionIndex) => {
          cards.push(<Question left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} handleQuestionCompleted={this.handleQuestionCompleted} updateTimeOnSuccess={this.updateTimeOnSuccess} updateAttemptsOnFail={this.updateAttemptsOnFail} updateScoreOnSuccess={this.updateScoreOnSuccess} key={categoryIndex + '-' + questionIndex}/>);
      })
    });

    return (
      <div className="questions-grid">
        <div className="headers">
          {headers}
        </div>
        {cards}
      </div>
    );
  }
};

QuestionsList.propTypes = {
  handleCompletion: PropTypes.func.isRequired
}

export default QuestionsList;
