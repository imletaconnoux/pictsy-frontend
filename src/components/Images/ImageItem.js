import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class ImageItem extends React.Component{

  render(){
    if (this.props.image.cover) {
      const link = `https://i.imgur.com/${this.props.image.cover}.jpg`
      return(
        <div className="Image-wrapper">
          <img aligned="center" width="560" height="315" src={link} alt={this.props.image}/>
          <p> {this.props.image.title} </p>
          <CommentList comments={this.props.comments}/>
          <CommentForm image={this.props.image.id}/>
      </div>
      )
    } else if (this.props.image.link) {
      return(
        <div className="Image-wrapper">
          <img aligned="center" width="560" height="315" src={this.props.image.link} alt={this.props.image}/>
          <p> {this.props.image.title} </p>
          <CommentList comments={this.props.comments}/>
          <CommentForm image={this.props.image.id}/>
      </div>
      )
    }
    else {
      return (
        null
      )
    }
  }
}

export default ImageItem
