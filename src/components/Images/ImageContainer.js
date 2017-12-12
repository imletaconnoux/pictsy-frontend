import React from 'react'
import { connect } from 'react-redux'
import ImageList from './ImageList'
import SearchBar from '../SearchBar'

class ImageContainer extends React.Component{

  render(){
    console.log("Image list", this.props.imageList)

    if (this.props.imageList.length > 0){
      return(
        <div className="ImageContainer">
          <h2>Search results for {this.props.term}</h2>
          <ImageList images={this.props.imageList} comments={this.props.comments}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome to Pictsy!</h1>
          <h2>Get started by entering a keyword.</h2>
          <SearchBar/>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    imageList: state.images.imageList,
    term: state.images.term,
    backgroundHash: state.images.backgroundHash,
    comments: state.comments.commentList
  }
}
export default connect(mapStateToProps)(ImageContainer)
