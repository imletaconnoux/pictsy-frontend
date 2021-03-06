function imgurReducer(state = {imageList: [], filteredList: [], term: null, pastSearch: []}, action){
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
      let filteredImages = images.filter(image => image.nsfw === !!action.filterPayload)
      if (filteredImages.length >=1){
        return Object.assign({}, state, {
          imageList: filteredImages
        })
      } else {
        return Object.assign({}, state, {
          imageList: [{message: "No results returned. Adjust the filter setting or search term."}]
        })
      }
    case "CLEAR_IMAGES":
        return Object.assign({}, state, {imageList: []})

    case "PAST_SEARCH":

        let included = false
        state.pastSearch.map((search) => {
          if (search.term === action.payload.term && search.filter === action.payload.filter){
            included = true
          }
        })
        if (included === false){
        return Object.assign({}, state, {pastSearch: [...state.pastSearch,  action.payload: {} ]})
      } else {
        return state
      }


    default:
      return state
  }
}

export default imgurReducer
