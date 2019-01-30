import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totTime: 0,
      timer: null,
      counter: 0,
      view: 'points',
      guess: '',
      completed: false,
      attempts: 0,
      finalScore: 0
     };
   }

   tick = () => {
     this.setState({
       counter: this.state.counter + 1
     });
   }

  clickHandler = (event) => {
    const { value, name } = event.target
    if (event.target.tagName.toUpperCase() === 'INPUT') {
      this.setState({[name]: value});
    } else if (this.state.view === 'points' && this.state.completed === true) {
      this.setState({view: 'question', flipping: true});
    } else if (this.state.view === 'points') {
      let timer = setInterval(this.tick, 1000);
      this.setState({view: 'question', flipping: true, timer});
    } else {
      this.setState({view: 'points', flipping: true});
    }
  }


  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.guess.toString().toUpperCase() === this.props.question.answer.toString().toUpperCase() ) {
      this.setState({view: 'points', flipping: true, completed: true, totTime: this.state.counter, finalScore: this.state.finalScore + this.props.question.points});
      clearInterval(this.state.timer);
      this.props.handleQuestionCompleted(event);
      this.props.updateTimeOnSuccess(this.state.counter);
      this.props.updateScoreOnSuccess(this.state.finalScore + this.props.question.points);
    } else {
      this.setState({attempts: this.state.attempts + 1, finalScore: this.state.finalScore - 1, guess: ''});
      this.props.updateAttemptsOnFail(event);
      alert("Wrong answer dude, you just lost 1 point!");
    }
  }

  getLabelBack = () => {
   return {__html: this.state.view === 'question' ? this.props.question.text : null};
  }

  transitionEndHandler = (event) => {
    if (event.propertyName === 'width') {
      this.setState({flipping: false});
    }
  }

  render() {
    let style = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
      WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
    },
    front = this.state.completed ? <img src="/polygonal-lion-head.jpg" alt='' /> : <img src="/polygonal-lion-head.jpg" alt=''  />,
    img = this.props.question.image_url !== "" ? <img src={this.props.question.image_url} alt='' /> : null,
    className = 'flipper',
    nameColorCard = 'front',
    nameForDiv = 'Score: ';

    if (this.state.completed) {
      nameColorCard = nameColorCard + ' success';
    } else if (this.state.attempts > 0) {
      nameColorCard = nameColorCard + ' fail';
    }

    if (this.state.completed ) {
     nameForDiv = 'Final Score: ';
    }

    if (this.state.view !== 'points') {
     className = className + ' flipped';
    }

    if (this.state.flipping) {
     className = className + ' flipping';
    }


    return (
      <div style={style} className={className} onClick={this.clickHandler} onTransitionEnd={this.transitionEndHandler}>
       <div className='card' id={this.props.question.id} >
         <div className={nameColorCard}>
           {front}
         </div>
         <div className='back' id="card_back">
           {img}
           <p className='finalScore'>{nameForDiv} {this.state.finalScore} - Timer: {this.state.counter + "''"}</p>
           <span dangerouslySetInnerHTML={this.getLabelBack()}/>
           <form onSubmit={this.handleOnSubmit}>
             <input
               type='text'
               name='guess'
               onChange={this.clickHandler}
               value={this.state.guess}
               autoFocus
             />
             <input
               type='submit'
             />
            </form>
         </div>
       </div>
      </div>
    );
  }
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleQuestionCompleted: PropTypes.func.isRequired,
  updateTimeOnSuccess: PropTypes.func.isRequired,
  updateAttemptsOnFail: PropTypes.func.isRequired,
  updateScoreOnSuccess: PropTypes.func.isRequired
}

export default Question;
