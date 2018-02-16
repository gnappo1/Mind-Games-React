import { combineReducers } from 'redux';
import quizzesReducer from './quizzesReducer';
import questionsReducer from './questionsReducer';


const rootReducer =  combineReducers({
  quizzes: quizzesReducer,
  questions: questionsReducer
});


export default rootReducer;
