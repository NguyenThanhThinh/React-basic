import React from 'react'


class Todo extends React.Component{
  render(){
    return(
      <div>
        <h1>hello</h1>
        <form onSubmit={this.props.onSubmitChange}>
          <input type="text" required value={this.props.value} onChange={this.props.onInputChange}/>
          <input type="submit" value="Sumit"/>
        </form>
      </div>
    )
  }
}

export default Todo