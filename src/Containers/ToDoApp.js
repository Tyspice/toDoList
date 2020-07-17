import React from 'react';
import '../App.css';

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
  }

  addToDo(todo) {
    this.setState({ toDoList: [...this.state.toDoList, todo] });
  }

  render(){
    
    return (
      <div className='app-container' >
        <Title title='*  TO DO  *' />
        <Form addToDoFn={ this.addToDo } />
        <ToDoList toDos= { this.state.toDoList } />
      </div>
    );
  }
}


