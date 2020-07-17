import React from 'react';
import '../App.css';

import Title from '../Components/Title'

export class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({userInput: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ toDoList: [...this.state.toDoList, this.state.userInput] });
    this.setState({userInput: ''});
  }

  render(){
    const items = this.state.toDoList.map((item) => {
      return <li key={item}> {item} </li>;
    });

    return (
      <div>
        <Title title='*TO DO*' />
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        value={this.state.userInput}
        onChange={this.handleChange}
        />
        </form>
        <ul>{ items }</ul>
      </div>
    );
  }
}


