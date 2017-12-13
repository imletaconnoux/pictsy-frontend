
function searchedImages(images){
  return{
    type: "SEARCHED_IMAGES",
    payload: images
  }
}

function setBackground(backgroundLink){
  return{
    type: "SET_BACKGROUND",
    payload: backgroundLink
  }
}

function setTerm(term){
  return{
    type: "SET_TERM",
    payload: term
  }
}

function filterImages(images, filter){
  return{
    type: "FILTER_IMAGES",
    imagePayload: images,
    filterPayload: filter
  }
}
export function searchImages(term, filter){
  return function(dispatch){
    fetch(`https://api.imgur.com/3/gallery/t/${term}`, {
      method: 'get',
      headers: {
        "Authorization": 'Client-ID 14f6073db7fa3da'
      }
    })
    .then((res) => res.json())
    .then((json) =>{
      const link = `https://i.imgur.com/${json.data.background_hash}.jpg`

      console.log(json.data.items)
      if (filter !== "") {
        dispatch(filterImages(json.data.items, filter))
      } else {
        dispatch(searchedImages(json.data.items))

      }
      dispatch(setBackground(link))
      dispatch(setTerm(json.data.name))
    })
  }
}



// export function searchImages2(term){
//   return function(dispatch){
//     fetch(`https://api.imgur.com/3/gallery/search?q=${term}`, {
//       method: 'get',
//       headers: {
//         "Authorization": 'Client-ID 14f6073db7fa3da'
//       }
//     })
//     .then((res) => res.json())
//     .then((json) =>{
//       debugger
//       console.log(json)
//     })
//   }
// }
//
