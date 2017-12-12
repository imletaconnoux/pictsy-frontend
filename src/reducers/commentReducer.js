function commentReducer(state = {commentList: []}, action){
  switch (action.type){
    case "ADD_COMMENT":
      return Object.assign({}, state, {commentList: [...state.commentList, action.payload: {}]})
    default:
      return state
  }
}

export default commentReducer
