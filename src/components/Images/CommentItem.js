import React from 'react'

class CommentItem extends React.Component{

  render(){
    console.log(this.props.comment)
    return(
      <div>
        <li>
        {this.props.comment.text}
        </li>
      </div>
    )
  }

}

export default CommentItem
