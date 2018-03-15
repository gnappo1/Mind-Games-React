let header = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json'

});

const setQuestions = questions => {
  return {
    type: 'GET_QUESTIONS',
    questions
  }
}

export const fetchQuestions = () => {
  return dispatch => {
    return fetch('https://mp-games.herokuapp.com/api/questions', {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    })
      .then(response => response.json())
      .then(questions => dispatch(setQuestions(questions)))
      .catch(error => console.log(error));
  }
}
