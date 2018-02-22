const setQuestions = questions => {
  return {
    type: 'GET_QUESTIONS',
    questions
  }
}

export const fetchQuestions = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/questions')
      .then(response => response.json())
      .then(questions => dispatch(setQuestions(questions)))
      .catch(error => console.log(error));
  }
}
