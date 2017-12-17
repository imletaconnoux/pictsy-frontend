import React from 'react'
import { searchImages } from '../actions/imgur'
import { connect } from 'react-redux'

class SearchBar extends React.Component{

  constructor(){
    super()
    this.state = {
      searchInput: "",
      filterInput: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleFilterInput = (event) => {
    if (event.target.value === "false") {
      this.setState({
        filterInput: false
      })
    } else if (event.target.value === "true"){
      this.setState({
        filterInput: true
      })
    } else {
      this.setState({
        filterInput: event.target.value
      })
    }
  }

  handleSearch = (event) => {
    event.preventDefault()
    if (this.state.searchInput !== ""){
      this.props.searchImages(this.state.searchInput, this.state.filterInput)
    }
  }

  render(){
    return(
      <form className="Searchbar-wrapper" onSubmit={this.handleSearch}>
        <input className="Search-item" type="text" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Search for images"/>
        <select className="Search-item"  onChange={this.handleFilterInput}>
          <option value="">Show me everything</option>
          <option value="false">I am at work! </option>
          <option value="true">NSFW only</option>
        </select>
        <button className="Search-item" >Search</button>
      </form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    searchImages: (term, filter) => {
      dispatch(searchImages(term, filter))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
