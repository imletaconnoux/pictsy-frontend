import React from 'react';
import '../../App.css'
import { searchImages } from '../../actions/imgur'
import { connect } from 'react-redux'

class PastSearchItem extends React.Component {

  handleClick =  (event) => {
    if (this.props.item.filter === null){
      this.props.searchImages(this.props.item.term, "")
    } else {
      this.props.searchImages(this.props.item.term,this.props. item.filter)
    }
  }

  render(){
    console.log(this.props)
    let link
    if (this.props.item.item.cover) {
      link = `https://i.imgur.com/${this.props.item.item.cover}.jpg`
    } else if (this.props.item.item.link) {
      link = this.props.item.item.link
    }
    return(

      <div className="column">
        <div className="Past-container">
          <div className="Past-preview">
            <img aligned="center" src={link} alt={this.props.item.term} onClick={this.handleClick}/>
            <div className="Past-text">
                <p>{this.props.item.term}</p>
            </div>
          </div>


        </div>
      </div>
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

export default connect(null, mapDispatchToProps)(PastSearchItem)
