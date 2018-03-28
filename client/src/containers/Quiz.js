import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false
     };
   }

  render() {
    let style = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
      WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
    },
    front = this.state.completed ? <img src="http://findtattoodesign.net/images/design/cool-geometric-lion.jpg" alt='' /> : <img src="http://blog.jumpinshirt.com/wp-content/uploads/2017/03/geometric-lion-t-shirt-by-joshuaturk-design-by-humans.jpg" alt=''  />,
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
