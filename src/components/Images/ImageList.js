import React from 'react'
import ImageItem from './ImageItem'

const ImageList = (props) => {
  const imageItems = props.images.map((image, index) =>{
    const comments = props.comments.filter(comment => comment.id === image.id)
      return <ImageItem key={index} image={image} comments={comments}/>
  })

  return (
    <div>
      <ol>
      {imageItems}
      </ol>
    </div>
  )


}

export default ImageList
