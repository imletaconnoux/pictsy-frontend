import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Modal from 'react-modal';
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
          <div className="Modal-wrapper">
          <Modal isOpen={this.state.open} onRequestClose={this.closeModal}
              className={{
                  base: 'myClass',
                  afterOpen: 'Image-modal',
                  beforeClose: 'myClass_before-close'
              }}>


              <div className="Modal-image">
                <img aligned="center" src={link} alt={this.props.image}/>
              </div>
              <div className="Modal-content">
                <p><em>{this.props.image.title}</em> </p>
                <hr/>
                <CommentList comments={this.props.comments}/>
                <CommentForm image={this.props.image.id}/>
              </div>

          </Modal>
          </div>
        </div>

      )

  }
}

export default ImageItem
