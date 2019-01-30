import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      clicks: 0
     };
   }

  render() {
    let style = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
      WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
    },
    front = this.state.completed ? <img src="/polygonal-lion-head.jpg" alt='' /> : <img src="/polygonal-lion-head.jpg" alt=''  />,
    nameColorCard = 'front';


    if (this.state.completed) {
      nameColorCard = nameColorCard + ' success';
    }

    return (
      <div className="card-container" style={style}>
        <div className='card' id={this.props.quiz.id} >
          <div className={nameColorCard}>
            {front}
          </div>
          <div className="quiz-link">
            <Link key={this.props.quiz.id} to={`/quizzes/${this.props.quiz.id}`}>{this.props.quiz.name}</Link>
          </div>
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Quiz;
