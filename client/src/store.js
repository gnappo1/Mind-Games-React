import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose } from 'redux'

//When you initialize the store you can incorporate your middleware like this

export function configureStore(){
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export const store = configureStore()
