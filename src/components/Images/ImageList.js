import React from 'react'
import ImageItem from './ImageItem'

const ImageList = (props) => {
  const imageItems = props.images.map((image, index) =>{
    return <ImageItem key={index} image={image}/>
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
