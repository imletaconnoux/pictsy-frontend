function imgurReducer(state = {imageList: [], filteredList: [], term: null, filter: null, backgroundHash: null}, action){
    let images
    switch (action.type){
    case "SEARCHED_IMAGES":
      images = action.payload.sort(function(a, b) {
        return b.ups - a.ups
      })
      return Object.assign({}, state, {imageList: images})
    case "SET_TERM":
      return Object.assign({}, state, {term: action.payload})
    case "FILTER_IMAGES":
      images = action.imagePayload.sort(function(a, b){
      return b.ups - a.ups
    })
      return Object.assign({}, state, {
        imageList: images.filter(image => image.nsfw === !!action.filterPayload)
      })
    case "CLEAR_IMAGES":
        return Object.assign({}, state, {imageList: []})
    default:
      return state
  }
}

export default imgurReducer
