import React, {Component} from 'react';
import Question from './Question';
import Headers from "../components/Headers";

class QuestionsList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        rows: 5,
        cols: 4
      };
    }

    handleResize = (event) => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }

    checkComplete = (event) => {
      let questions = this.props.questions.filter(question => question.quiz_id === this.props.quiz.id )
      let incompleteQuestions = questions.filter(question => question.completed === false)
      if (incompleteQuestions.count === 0) {

      }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
      const cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

      let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
        cardWidth = this.state.windowWidth / this.state.cols,
        cardHeight = (this.state.windowHeight - headerHeight - 100) / this.state.rows,
        cards = [];

      cols.forEach((category, categoryIndex) => {
        let left = categoryIndex * cardWidth;
        let categoryQuestions = this.props.questions.filter(question => question.points.toString() === category[0])
        categoryQuestions.forEach((question, questionIndex) => {
            cards.push(<Question left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={categoryIndex + '-' + questionIndex}/>);
        })
      });

      return (
        <div>
          <Headers data={cols} headerWidth={cardWidth}/>
          {cards}
        </div>
      );
    }

};

export default QuestionsList;
