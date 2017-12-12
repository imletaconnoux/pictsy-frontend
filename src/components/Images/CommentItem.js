import React from 'react'

class CommentItem extends React.Component{

  render(){
    console.log(this.props.comment)
    return(
      <div>
        {this.props.comment.text}
      </div>
    )
  }

}

export default CommentItem
