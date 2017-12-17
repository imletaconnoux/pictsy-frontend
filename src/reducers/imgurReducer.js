function imgurReducer(state = {imageList: [], filteredList: [], term: null, filter: null, backgroundHash: null}, action){
  switch (action.type){
    case "SEARCHED_IMAGES":
      return Object.assign({}, state, {imageList: action.payload})
    case "SET_BACKGROUND":
      return Object.assign({}, state, {backgroundHash: action.payload})
    case "SET_TERM":
      return Object.assign({}, state, {term: action.payload})
    case "FILTER_IMAGES":
      return Object.assign({}, state, {
        imageList: action.imagePayload.filter(image => image.nsfw === !!action.filterPayload)
      })
    case "CLEAR_IMAGES":
        return Object.assign({}, state, {imageList: []})
    default:
      return state
  }
}

export default imgurReducer
