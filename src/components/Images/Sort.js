import React from 'react'
// import { connect } from 'react-redux'

class Sort extends React.Component{

  constructor(){
    super()
    this.state = {
      images: "",
      sortby: "Most Popular"
    }
  }

  componentDidMount(){
    this.setState({
      images: this.props.images
    })
  }

  sortByPopularity = (array) => {
    let sorted = array.sort(function(a, b) {
      return b.ups - a.ups
    })
    this.props.handleSort(sorted)
  }

  sortByViews= (array) => {
      let sorted = array.sort(function(a, b) {
      return b.views - a.views
    })
    this.props.handleSort(sorted)
  }

  sortNewest = (array) => {
    let sorted = array.sort(function(a, b){
      return b.datetime - a.datetime
    })

    this.props.handleSort(sorted)
  }


  handleSortInput = (event) => {
    if (event.target.value === "popular"){
          this.sortByPopularity(this.state.images)
    } else if (event.target.value === "views"){
       this.sortByViews(this.state.images)
    } else if (event.target.value === "newest"){
      this.sortNewest(this.state.images)
    }
  }

  render(){
    return(

      <div className="Sort-dropdown">

          <select onChange={this.handleSortInput}>
            <option value="popular">popularity</option>
            <option value="views">number of views</option>
            <option value="newest">newest first</option>
          </select>

      </div>

    )
  }
}

export default Sort
