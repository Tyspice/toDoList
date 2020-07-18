import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.removeToDoFn(this.props.itemIndex);
    }

    render() {

        let styles = {
            textAlign: 'center',
            color: 'white',
            margin: 10
        };

        return (
            <div 
            style={ styles } 
            onClick={ this.handleClick } 
            > 
            {this.props.item} 
            </div>
        );
    }
}

export default ToDoItem;