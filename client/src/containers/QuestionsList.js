import React, {Component} from 'react';
import Question from './Question';

class QuestionsList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        rows: 5,
        cols: 4,
        completedCount: 0
      };
    }

    handleResize = (event) => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
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
         this.props.handleCompletion();
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
      const cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

      let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
        cardWidth = this.state.windowWidth / this.state.cols,
        cardHeight = (this.state.windowHeight - headerHeight - 69) / this.state.rows,
        cards = [],
        headers = [];

      cols.forEach((category, categoryIndex) => {
        headers.push(<span className='header' key={categoryIndex}>{category}</span>);

        let left = categoryIndex * cardWidth,
            categoryQuestions = this.props.questions.filter(question => question.points.toString() === category[0])
        categoryQuestions.forEach((question, questionIndex) => {
            cards.push(<Question left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} handleQuestionCompleted={this.handleQuestionCompleted} key={categoryIndex + '-' + questionIndex}/>);
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

export default QuestionsList;
