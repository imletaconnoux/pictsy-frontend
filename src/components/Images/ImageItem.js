import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Modal from 'react-responsive-modal'
import '../../App.css'

class ImageItem extends React.Component{

  constructor(){
    super()
    this.state = {
      open: false
    }
  }

  openModal = () => {
    this.setState({open: true})
  }

  closeModal = () => {
    this.setState({open: false})
  }

  render(){
    let link
    if (this.props.image.cover) {
      link = `https://i.imgur.com/${this.props.image.cover}.jpg`
    } else if (this.props.image.link) {
      link = this.props.image.link
    }
    return(

        <div className="column">
          <div className="Image-container">
            <img aligned="center" src={link} alt={this.props.image} onClick={this.openModal}/>
          </div>
          <Modal open={this.state.open} onClose={this.closeModal}>
            <p>Image Title: {this.props.image.title} </p>
            <div className="Modal-container">
              <img aligned="center" src={link} alt={this.props.image} onClick={this.openModal}/>
              <CommentList comments={this.props.comments}/>
              <CommentForm image={this.props.image.id}/>
            </div>
          </Modal>
      </div>

      )

  }
}

export default ImageItem
