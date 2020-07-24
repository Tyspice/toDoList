import React from 'react';

class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            humanInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        //add each new character string to state as they are entered
        this.setState({humanInput: e.target.value})
    }

    handleSubmit(e) {
        // sends the submited result to the state array in the app level above
        e.preventDefault();
        this.props.addToDoFn(this.state.humanInput);
        this.setState({humanInput: ''});
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    value={this.state.humanInput}
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default Form;