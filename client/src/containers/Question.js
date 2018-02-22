import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

  //constructor(props) {
    //super(props);

    //this.state = {
    //  points: 1,
    //  time: 0,
    //  view: 'points',
    //  completed: false
    //};
  //}

  //handleOnClick = (event) => {
  //  if (this.props.view === 'points') {
  //    this.setState({view: 'question', flipping: true});
  //  } else if (this.props.view === 'question') {
  //      this.setState({view: 'points'});
  //  }
  //}

  //getLabelBack = () => {
  //  return {__html: this.props.view === 'question' ? this.props.question.text : this.props.question.answer};
  //}

  //flippingHandler = (event) => {
  //  if (event.propertyName === 'width') {
  //    this.setState({flipping: false});
  //  }
  //}

  render() {
  //  let style = {
  //    width: this.props.width + 'px',
  //    height: this.props.height + 'px',
  //    transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
  //    WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
  //  },
  //  front = this.props.completed ? <img src='https://www.wallpaperxhd.com/wp-content/uploads/2016/10/polygon-3840x2160-green-orange-blue-background-231-2560x1600.jpg' alt='' /> : <img src='https://www.google.com/url?sa=i&amp;rct=j&amp;q=&amp;esrc=s&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjqsfKQ7q3ZAhUO5WMKHRd6DAIQjRwIBw&amp;url=https%3A%2F%2Fwallpapersafari.com%2Fgeometric-shapes-wallpaper%2F&amp;psig=AOvVaw0nUvrLgrihRhDzVbSWfwRj&amp;ust=1518988165942675' alt='' />,
  //  className = 'flipper';
//
  //  if (this.props.view !== 'points') {
  //    className = className + ' flipped';
  //  }
  //  if (this.props.flipping) {
  //    className = className + ' flipping';
  //  }
    return (
      //<div style={style} className={className} onClick={this.handleOnClick} onTransitionEnd={this.flippingHandler}>
      //  <div className='card'>
      //    <div className='front'>
      //      {front}
      //    </div>
      //    <div className='back'>
      //      <span dangerouslySetInnerHTML={this.getLabelBack()}/>
      //      <img src='/logo/MPGamesLlogo' alt='MPGames Logo'/>
      //    </div>
      //  </div>
      //</div>
      <div className="Question">
        <h3> {this.props.question.text} </h3>
      </div>
    );
  }
};

//const mapStateToProps = (state) => {
//  return {
//    view: state.view,
//    completed: state.completed,
//    flipping: state.flipping,
//  };
//}
//
//export default connect(mapStateToProps)(Question);
export default Question;
