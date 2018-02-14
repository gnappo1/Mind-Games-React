export default (state = [], action) => {
  switch(action.type) {
    case 'GET_QUIZZES':
      return action.quizzes

    default:
      return state
  }
}
