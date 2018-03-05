import React, {Component} from 'react';
import Question from '../containers/Question';
import Headers from "./Headers";

//const QuestionsList = ({questions}) => {
  //debugger

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
  // function checkOnePoint(question) {
  //   return question.points === 1;
  // }
//    const onePoint = questions.filter(question => {
//       return question.points === 1
//     })
//   //
//   // const threePoints = questions.filter(question => {
//   //   return question.points === 3
//   // })
//   //
//   // const fivePoints = questions.filter(question => {
//   //   return question.points === 5
//   // })
//   //
//   // const sevenPoints = questions.filter(question => {
//   //   return question.points === 7
//   // })
//   //
//    const onePointQuestions = onePoint.map(question => {
//      return (
//        <div key={question.id}>
//          <h5>{question.text}</h5>
//        </div>
//      )
//    });
//
//   // const threePointQuestions = threePoints.map(question => {
//   //   return (
//   //     <div key={question.id}>
//   //       <h5>{question.text}</h5>
//   //     </div>
//   //   )
//   // });
//   //
//   // const fivePointQuestions = fivePoints.map(question => {
//   //   return (
//   //     <div key={question.id}>
//   //       <h5>{question.text}</h5>
//   //     </div>
//   //   )
//   // });
//   //
//   // const sevenPointQuestions = sevenPoints.map(question => {
//   //   return (
//   //     <div key={question.id}>
//   //       <h5>{question.text}</h5>
//   //     </div>
//   //   )
//   // });
//
//   return (
//     <div className="ui grid container">
//       <div className="row">
//         <div className="four wide column">
//           <h5>1 POINT</h5>
//           {onePointQuestions}
//         </div>
//         <div className="four wide column">
//           <h5>3 POINTS</h5>
//         </div>
//         <div className="four wide column">
//           <h5>5 POINTS</h5>
//         </div>
//         <div className="four wide column">
//           <h5>7 POINTS</h5>
//         </div>
//       </div>
//     </div>
//   );
// }


class QuestionsList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        rows: 0,
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
      let rows = 5;
      let cols = ["1 POINT", "3 POINTS", "5 POINTS", "7 POINTS"];

      // cols.forEach(category => {
      //   let categoryQuestions = this.props.questions.filter(question => question.points === category[0])
      //   if (categoryQuestions.length > rows) {
      //       rows = categoryQuestions.length;
      //   }
      // });
      this.setState({rows: rows});
    }

    /*
    // Traditional XHR implementation. Getting questions from data.json using XHR. Will run into cross origin issues in some browsers
    // if loading index.html from the local file system (using the file:// protocol) -->
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        request({url: "data.json"}).then(result => {
            let data = JSON.parse(result),
                rows = 0;
            data.forEach(category => {
                if (category.questions.length > rows) {
                    rows = category.questions.length;
                }
            });
            this.setState({data: data, rows: rows, cols: data.length});
        });
    }
    */

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
