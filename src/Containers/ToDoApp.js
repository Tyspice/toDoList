import React from 'react';

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
        <h1>*TO DO*</h1>
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


