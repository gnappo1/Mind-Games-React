let header = new Headers({
  'Access-Control-Allow-Origin':'*',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

const setQuizzes = quizzes => {
  return {
    type: 'GET_QUIZZES',
    quizzes
  }
}

export const getQuizzes = () => {
  return dispatch => {
    return fetch('https://mp-games.herokuapp.com/api/quizzes', header)
      .then(response => response.json())
      .then(quizzes => dispatch(setQuizzes(quizzes)))
      .catch(error => console.log(error));
  }
}
