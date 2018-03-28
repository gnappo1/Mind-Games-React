let header = new Headers({
  'Access-Control-Allow-Origin':'*',
  'Content-Type': 'application/json'
});

const setQuestions = questions => {
  return {
    type: 'GET_QUESTIONS',
    questions
  }
}

//Redux Thunk allows us to return a function inside of our action creator. Second, that function inside of Redux Thunk receives the store's dispatch function as its argument.

export const fetchQuestions = () => {
  return dispatch => {
    return fetch('https://mp-games.herokuapp.com/api/questions', header )
      .then(response => response.json())
      .then(questions => dispatch(setQuestions(questions)))
      .catch(error => console.log(error));
  }
}
