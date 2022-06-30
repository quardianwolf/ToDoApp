import React, { Component } from 'react'


export default class ToDo extends Component {
  state = {
    input:"",
  }
  changeHandler=(e)=>{
    this.setState({
      input:e.target.value
    })

  }
  submitHandler=(e)=>{
    this.props.addToDo(this.state.input)
    this.setState({
      input:""
    })
    e.preventDefault()
  }
  
  render() {
   
    return ( 
     <div>
      <h1>Use Your Time.</h1>
      <form onSubmit={this.submitHandler}>
        <input placeholder='use your time' type="text"
        value={this.state.input}
        onChange={this.changeHandler}/>
        <button
         type="submit">Add</button>
      </form>
      </div>
    
    )
  }
}
