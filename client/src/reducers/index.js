import { combineReducers } from 'redux';
import quizzesReducer from './quizzesReducer';
import questionsReducer from './questionsReducer';
// import contactsReducer from './contactsReducer';


const rootReducer =  combineReducers({
  quizzes: quizzesReducer,
  questions: questionsReducer,
});


export default rootReducer;
