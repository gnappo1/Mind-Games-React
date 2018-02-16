const setQuestions = questions => {
  return {
    type: 'GET_QUESTIONS',
    questions
  }
}

export const getQuestions = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/questions')
      .then(response => response.json())
      .then(quizzes => dispatch(setQuestions(questions)))
  }
}
