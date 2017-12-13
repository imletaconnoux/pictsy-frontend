import React from 'react'
import CommentItem from './CommentItem'

const CommentList = (props) => {
  const commentItems = props.comments.map((comment, index) =>{


      return <CommentItem key={index} comment={comment}/>

  })

  return (
    <div>
      <ul>
      {commentItems}
      </ul>
    </div>
  )


}

export default CommentList
