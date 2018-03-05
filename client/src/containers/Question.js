import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-s-alert';


class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
     points: 1,
     time: 0,
     view: 'points',
     guess: '',
     completed: false,
     finalScore: 0
    };
  }

  clickHandler = (event) => {
    const { value, name } = event.target
    if (event.target.tagName.toUpperCase() === 'INPUT') {
      this.setState({[name]: value});
    } else if (this.state.view === 'points') {
      this.setState({view: 'question', flipping: true});
    } else {
      this.setState({view: 'points', flipping: true});
    }
  }


  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.guess === this.props.question.answer) {
      this.setState({view: 'points', flipping: true, completed: true});
      debugger
      alert("Congrats, that was the right answer! Your final score is" )
    } else {
      debugger
      this.setState({finalScore: this.props.finalScore - 1});
      console.log(this.state.finalScore)
      alert("Wrong answer dude, you just lost 1 point!")
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
    className = 'flipper';

    if (this.state.view !== 'points') {
     className = className + ' flipped';
    }

    if (this.state.flipping) {
     className = className + ' flipping';
    }

    return (
      <div style={style} className={className} onClick={this.clickHandler} onTransitionEnd={this.transitionEndHandler}>
       <div className='card'>
         <div className='front'>
           {front}
         </div>
         <div className='back'>
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
   finalScore: state.finalScore
 };
}

export default connect(mapStateToProps)(Question);
