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
        this.setState({humanInput: e.target.value})
    }

    handleSubmit(e) {
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