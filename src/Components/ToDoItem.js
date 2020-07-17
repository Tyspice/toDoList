import React from 'react';

class ToDoItem extends React.Component {

    render() {

        let styles = {
            textAlign: 'center',
            color: 'white',
            margin: 10
        };

        return (
            <div style={ styles }> {this.props._item} </div>
        );
    }
}

export default ToDoItem;