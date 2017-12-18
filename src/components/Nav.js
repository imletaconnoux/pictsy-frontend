import React from 'react'
import { connect }  from 'react-redux'
import SearchBar from './SearchBar'
import '../App.css'

class Nav extends React.Component{
  render(){
    if (this.props.term && !this.props.imageList[0].message) {
      return(
         <div className="App-header">
            <ul className="Nav-items">
              <li className="Nav-item">Pictsy</li>
              <li className="Nav-search">
                <SearchBar/>
              </li>
            </ul>
         </div>
      )
    } else {
      return(
         <div className="App-header">
            <ul className="Nav-items">
              <li className="Nav-item">Pictsy</li>
            </ul>
         </div>
      )
    }
  }
}

function mapStateToProps(state){
  return{
    term: state.images.term,
    imageList: state.images.imageList
  }
}

export default connect (mapStateToProps)(Nav)
