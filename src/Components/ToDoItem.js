import React from 'react';
import { ReactComponent as CloseIcon } from '../Icons/close-outline.svg';
import { ReactComponent as CheckmarkIcon } from '../Icons/checkmark-outline.svg';

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
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 20,
            textAlign: 'center',
            color: '##2196F3',
            margin: 10,
            padding: 10,
            backgroundColor: '#BBDEFB',
            borderRadius: 10,
            width: 500
        };

        let iconStyles = {
            height: 25,
            width: 25
        };

        return (
            <div 
            style={ styles } 
            onClick={ this.handleClick } 
            >
                <div>
                    {this.props.item}
                </div>
                <div>
                    <CheckmarkIcon style= { iconStyles } />
                    <CloseIcon style={ iconStyles } />
                </div>
            </div>
        );
    }
}

export default ToDoItem;