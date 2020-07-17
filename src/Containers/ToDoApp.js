import React from 'react';
import '../App.css';

import Title from '../Components/Title'
import Form from '../Components/ToDoForm'

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
    const items = this.state.toDoList.map((item) => {
      return <li key={item}> {item} </li>;
    });

    return (
      <div>
        <Title title='*TO DO*' />
        <Form addToDoFn={ this.addToDo } />
        <ul>{ items }</ul>
      </div>
    );
  }
}


