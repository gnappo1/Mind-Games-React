const setQuizzes = quizzes => {
  return {
    type: 'GET_QUIZZES',
    quizzes
  }
}

export const getQuizzes = (dispatch) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/quizzes')
      .then(response => response.json())
      .then(quizzes => dispatch(setQuizzes(quizzes)))
      .catch(error => console.log(error));
  }
}
