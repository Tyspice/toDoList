import React from 'react';
import '../CSS/App.css';

import Title from '../Components/Title'
import Form from '../Components/ToDoForm'
import ToDoList from '../Components/ToDoList'

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };

    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(todo) {
    this.setState({ toDoList: [...this.state.toDoList, todo] });
  }

  removeToDo(itemIndex) {
    let array = [...this.state.toDoList];
    if (itemIndex !== -1) {
      array.splice(itemIndex, 1);
      this.setState({toDoList: array});
    }
  }

  render(){
    
    return (
      <div className='app-container' >
        <Title title=' TO DO ' />
        <Form addToDoFn={ this.addToDo } />
        <ToDoList 
        toDos= { this.state.toDoList } 
        removeToDoFn={ this.removeToDo }
        />
      </div>
    );
  }
}


