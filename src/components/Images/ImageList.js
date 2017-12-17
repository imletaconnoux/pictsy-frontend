import React from 'react'
import ImageItem from './ImageItem'
import '../../App.css'

const ImageList = (props) => {
  const imageItems = props.images.map((image, index) =>{
    const comments = props.comments.filter(comment => comment.id === image.id)
      return <ImageItem key={index} image={image} comments={comments}/>
  })

  return (
    <div className="wrapper">


      {imageItems}


    </div>
  )


}

export default ImageList
