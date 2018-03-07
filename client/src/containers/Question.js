import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      points: 1,
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
    if (this.state.guess === this.props.question.answer) {
      this.setState({view: 'points', flipping: true, completed: true, totTime: this.state.counter, finalScore: this.state.finalScore + this.props.question.points});
      clearInterval(this.state.timer);
      alert("Congrats, that was the right answer! Your final score is" );
      this.props.question.time = this.state.counter;
    } else {
      this.setState({attempts: this.state.attempts + 1, finalScore: this.state.finalScore - 1});
      console.log(this.state.attempts);
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
    front = this.state.completed ? <img src="http://findtattoodesign.net/images/design/cool-geometric-lion.jpg" alt='' /> : <img src="http://blog.jumpinshirt.com/wp-content/uploads/2017/03/geometric-lion-t-shirt-by-joshuaturk-design-by-humans.jpg" alt=''  />,
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
           <p className='finalScore'>{nameForDiv} {this.state.finalScore} - Timer: {this.state.counter + "'"}</p>
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

const mapStateToProps = (state) => {
 return {
   view: state.view,
   completed: state.completed,
   flipping: state.flipping,
   finalScore: state.finalScore,
   counter: state.counter
 };
}

export default connect(mapStateToProps)(Question);
