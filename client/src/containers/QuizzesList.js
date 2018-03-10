import React, {Component} from 'react';
import Quiz from './Quiz';

class QuizzesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      rows: 3,
      cols: 4
    };
  }

  handleResize = (event) => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {

    const cols = ["Logic", "Geography", "General Knowledge", "History"];

    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      cardWidth = this.state.windowWidth / this.state.cols,
      cardHeight = (this.state.windowHeight - headerHeight - 169) / this.state.rows,
      cards = [],
      headers = [];

    cols.forEach((category, categoryIndex) => {
      headers.push(<span className='header' key={categoryIndex}>{category}</span>);

      let left = categoryIndex * cardWidth,
          categoryQuizzes = this.props.quizzes.filter(quiz => quiz.category === category);

      categoryQuizzes.forEach((quiz, quizIndex) => {
        cards.push(<Quiz left={left} top={quizIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} quiz={quiz} key={categoryIndex + '-' + quizIndex}/>);
      })
    });

    return (
      <div className="quiz-grid">
        <div className="headers">
          {headers}
        </div>
        {cards}
      </div>
    );
  }
}

export default QuizzesList;
