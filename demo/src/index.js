import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';
import TodoList from './components/TodoList';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {value: '', list: []}
    }
  
    handleSubmit(e){
      e.preventDefault()
      let newTodo = this.state.list
      newTodo.push(this.state.value)
      this.setState({list: newTodo, value: ''})
    }
    handleChange(e){
      this.setState({value: e.target.value})
      
    }
    handleClick(index){
      let newTodo = this.state.list
      newTodo.splice(index, 1)
      this.setState({list: newTodo})
    }
    render(){
      let todo = this.state.value
      return (
        <div>
          <h1>TODO list App </h1>
          <Todo 
          value={todo}
          onInputChange={this.handleChange.bind(this)} 
          onSubmitChange={this.handleSubmit.bind(this)}
          />
           <TodoList 
           todo={this.state.list}
           onDelete={this.handleClick.bind(this)}/> 
  
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
