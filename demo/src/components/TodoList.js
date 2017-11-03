import React from 'react'

const TodoList = ({todo, onDelete}) => {
    var data = todo.map((item, index) => {
      // () => {this.get(fkds)}
      return (<li key={index} onClick={() => {onDelete(index)}}> {item }</li>)
    })
    return(
      <ul>{data}</ul>
    )
  }


export default TodoList