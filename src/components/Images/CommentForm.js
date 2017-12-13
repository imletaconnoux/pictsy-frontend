import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comment'

class CommentForm extends React.Component{

  constructor(){
    super()
    this.state = {
      textInput: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  handleSubmit = (event)  => {
    event.preventDefault()
    if (this.state.textInput !== ""){
      this.props.addComment({id: this.props.image, text: this.state.textInput})
    }
  }

  render(){
    return(
        <div className="Comment-form">
          <hr/>
          <form className="Commentform-wrapper" onSubmit={this.handleSubmit}>
            <input type="textarea" value={this.state.textInput} placeholder="Comment on this photo..." onChange={this.handleInputChange}/>
          </form>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    addComment: (comment) => {
      dispatch(addComment(comment))
    }
  }
}
export default connect(null, mapDispatchToProps)(CommentForm)
