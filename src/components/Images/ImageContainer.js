import React from 'react'
import { connect } from 'react-redux'
import ImageList from './ImageList'
import PastSearchList from './PastSearchList'
import SearchBar from '../SearchBar'
import { clearImages } from '../../actions/imgur'
import Sort from './Sort'
import '../../App.css'

class ImageContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      sortedImages: ""
    }
  }


  handleClear = (event) => {
    this.props.clearImages()
    this.setState({
      sortedImages: ""
    })
  }

  handleSort = (array) => {

    this.setState({
      sortedImages: array
    })
  }


  render(){


    console.log(this.props.pastSearch)
    if (this.state.sortedImages !== "") {
      return(
        <div>
          <div className="Results-title">
            <div className="Result-sentence"> <h2>Search results for <em>{this.props.term}</em> sorted by: </h2>  </div>
            <Sort images={this.props.imageList} clearSort={this.clearSort} handleSort={this.handleSort}/>

          </div>
          <div className="Clear">
            <button onClick={this.handleClear} id="clear-button">Clear search</button>

          </div>

            <div className="Search-results">
            <ImageList images={this.state.sortedImages} comments={this.props.comments}/>
            </div>


        </div>
      )
    } else if (this.props.imageList.length > 0 && !this.props.imageList[0].message){
      return(
        <div>
          <div className="Results-title">
            <div className="Result-sentence"> <h2>Search results for <em>{this.props.term}</em> sorted by: </h2> </div>
            <Sort images={this.props.imageList} handleSort={this.handleSort} clearSort={this.clearSort}/>

          </div>
          <div className="Clear">
            <button onClick={this.handleClear} id="clear-button">Clear search</button>
          </div>

          <div className="Search-results">
            <ImageList images={this.props.imageList} comments={this.props.comments}/>
          </div>

        </div>
      )
    } else if (this.props.imageList.length > 0 && this.props.imageList[0].message) {
      debugger
      return (
        <div className="Error-image">
          <div className="Error-content">

          <h2>{this.props.imageList[0].message}</h2>
          <SearchBar/>
          </div>
        </div>
      )
    } else if (this.props.imageList.length < 1 && this.props.pastSearch.length > 0) {
      return (
        <div>
          <div className="Results-title">
            <div className="Result-sentence"> <h2><em>Your recent searches: </em></h2>  </div>


          </div>
          <div className="Search-results">
          <PastSearchList items={this.props.pastSearch}/>
          </div>
        </div>
      )
    }

     else {
      return (
        <div className="Landing-image">
          <div className="Landing-content">
          <h1>Welcome to Pictsy!</h1>
          <h2>Get started by entering a keyword.</h2>
          <SearchBar/>
          </div>
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
    comments: state.comments.commentList,
    pastSearch: state.images.pastSearch
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
