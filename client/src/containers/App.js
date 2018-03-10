import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import QuizzesPage from './QuizzesPage';
import Home from '../components/Home';
import About from '../components/About'
import Contacts from '../components/Contacts'
import * as actions from '../actions/index.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
     };
   }

  updateDimensions = () => {

    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
        this.setState({width, height});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    this.props.actions.getQuizzes();
    this.props.actions.fetchQuestions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <Router >
        <div className="background-here">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path='/quizzes' component={QuizzesPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contacts} />
        </div>
      </Router >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(App);
