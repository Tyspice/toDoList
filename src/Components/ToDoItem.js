import React from 'react';
import '../CSS/ToDoItem.css';
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

        
        let iconStyles = {
            height: 25,
            width: 25
        };

        return (
            <div
            className={ 'todo-container' } 
            >
                <div className={ 'input' }>
                    {this.props.item}
                </div>
                <div className={ 'icons-container' }>
                    <div className={ 'icon-container' }>
                        <CheckmarkIcon className={ 'icon' } />
                    </div>
                    <div className={ 'icon-container' } onClick={ this.handleClick }>
                        <CloseIcon className={ 'icon' } />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;