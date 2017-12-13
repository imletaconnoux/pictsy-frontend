import React from 'react'
import '../../Modal.css'

class ImageModal extends React.Component{

  render(){
    return(
      <div id="myModal" class="modal">


        <span class="close">&times;</span>


        <img class="modal-content" id="img01" src={this.props.link}/>


        <div id="caption"></div>
      </div>
  )
  }
}

export default ImageModal

 /// OLD IMAGE ITEM

import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import ImageModal from './ImageModal'
import Modal from 'react-responsive-modal'

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
    if (this.props.image.cover) {
      const link = `https://i.imgur.com/${this.props.image.cover}.jpg`
      return(
        <div className="Image-wrapper">
          <img aligned="center" width="560" height="315" src={link} alt={this.props.image} onClick={this.openModal}/>
          <Modal open={this.state.open} onClose={this.closeModal}>
            <p>Image Title: {this.props.image.title} </p>
            <img aligned="center" width="560" height="315" src={link} alt={this.props.image} onClick={this.openModal}/>


          </Modal>
          <CommentList comments={this.props.comments}/>
          <CommentForm image={this.props.image.id}/>
      </div>
      )
    } else if (this.props.image.link) {
      return(
        <div className="Image-wrapper">
          <img aligned="center" width="560" height="315" src={this.props.image.link} alt={this.props.image} onClick={this.openModal}/>
          <Modal open={this.state.open} onClose={this.closeModal}>
          <p>Image Title: {this.props.image.title} </p>
          <img aligned="center" width="560" height="315" src={this.props.image.link} alt={this.props.image} onClick={this.openModal}/>

          </Modal>
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
