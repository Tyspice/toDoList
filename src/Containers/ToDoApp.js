import React from 'react';
import '../CSS/App.css';

import Title from '../Components/Title';
import Form from '../Components/ToDoForm';
import ToDoList from '../Components/ToDoList';
import FilterBtn from '../Components/FilterBtn'

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    };

    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
    this.moveToDoUp = this.moveToDoUp.bind(this);
    this.moveToDoDown = this.moveToDoDown.bind(this);
    this.filterToDos = this.filterToDos.bind(this);
  }

  addToDo(_toDo) {
    //adds a new todo to this.state with the checked property set to false
    this.setState({ 
      toDoList: 
      [{toDo: _toDo, checked: false}, ...this.state.toDoList] });
  }

  removeToDo(_itemIndex) {
    // removes todo item from this.state
    let array = [...this.state.toDoList];
    if (_itemIndex !== -1) {
      array.splice(_itemIndex, 1);
      this.setState({toDoList: array});
    }
  }

  toggleToDo (_checked, _itemIndex) {
    // toggles checked property in this.state
    let array = [...this.state.toDoList];
    array.forEach((e, eIndex) => {
      if (eIndex === _itemIndex) {
        e.checked = !e.checked;
        this.setState({toDoList: array});
      } 
    });
  }

  moveToDoUp (_itemIndex) {
    // moves the todo up
    let array = [...this.state.toDoList];
    if (_itemIndex !== 0) {
      const moveUp = (arr, init, target) => {
        [arr[init], arr[target]] = [arr[target], arr[init]];
        return arr
      }
      moveUp(array,_itemIndex,(_itemIndex - 1));
      this.setState({toDoList: array});
    }
  }

  moveToDoDown(_itemIndex) {
    // moves the todo down
    let array = [...this.state.toDoList];
    if (_itemIndex !== (array.length - 1)) {
      const moveUp = (arr, init, target) => {
        [arr[init], arr[target]] = [arr[target], arr[init]];
        return arr
      }
      moveUp(array,_itemIndex,(_itemIndex + 1));
      this.setState({toDoList: array});
    }
  }

  filterToDos() {
    // filters todos putting all cheched items at the end
    let array = [...this.state.toDoList];
    let top = [];
    let bottom = [];
    // this is not the most elegant solution but it works
    array.forEach(e => (e.checked === true) ? bottom.push(e) : top.push(e));
    array = [...top, ...bottom];
    this.setState({toDoList: array})
  }

  render(){
    
    return (
      <div className='app-container' >
        <Title title=' TO DO ' />
        <Form addToDoFn={ this.addToDo } />
        <FilterBtn filterFn= { this.filterToDos }/>
        <ToDoList 
        toDos= { this.state.toDoList } 
        removeToDoFn={ this.removeToDo }
        toggleToDoFn={ this.toggleToDo }
        moveToDoUpFn={ this.moveToDoUp }
        moveToDoDownFn={ this.moveToDoDown }
        />
      </div>
    );
  }
}


