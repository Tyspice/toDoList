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
    this.toggleToDo = this.toggleToDo.bind(this);
  }

  addToDo(_toDo) {
    this.setState({ 
      toDoList: 
      [...this.state.toDoList, {toDo: _toDo, checked: false}] });
  }

  removeToDo(_itemIndex) {
    let array = [...this.state.toDoList];
    if (_itemIndex !== -1) {
      array.splice(_itemIndex, 1);
      this.setState({toDoList: array});
    }
  }

  toggleToDo (_checked, _itemIndex) {
    // will toggle checked property
    let array = [...this.state.toDoList];
    array.forEach((e, eIndex) => {
      if (eIndex === _itemIndex) {
        e.checked = !e.checked;
        this.setState({toDoList: array});
      } 
    });


  }

  render(){
    
    return (
      <div className='app-container' >
        <Title title=' TO DO ' />
        <Form addToDoFn={ this.addToDo } />
        <ToDoList 
        toDos= { this.state.toDoList } 
        removeToDoFn={ this.removeToDo }
        toggleToDoFn={ this.toggleToDo }
        />
      </div>
    );
  }
}


