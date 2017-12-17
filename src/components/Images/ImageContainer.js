import React from 'react'
import { connect } from 'react-redux'
import ImageList from './ImageList'
import SearchBar from '../SearchBar'
import { clearImages } from '../../actions/imgur'
import '../../App.css'

class ImageContainer extends React.Component{

  handleClear = (event) => {
    this.props.clearImages()
  }
  render(){
    console.log("Image list", this.props.imageList)

    if (this.props.imageList.length > 0){
      return(
        <div>

          <h2>Search results for <em>{this.props.term}</em></h2>
          <div className="Filter-results">
            <button id="filter-dropdown">Filter Dropdown</button>
            <button onClick={this.handleClear} id="clear-button">Clear search</button>
          </div>

            <div className="Search-results">
            <ImageList images={this.props.imageList} comments={this.props.comments}/>
            </div>

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

function mapDispatchToProps(dispatch){
  return{
    clearImages: () => {
      dispatch(clearImages())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
