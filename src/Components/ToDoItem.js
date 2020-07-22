import React from 'react';
import '../CSS/ToDoItem.css';
import { ReactComponent as CloseIcon } from '../Icons/close-outline.svg';
import { ReactComponent as CheckmarkIcon } from '../Icons/checkmark-outline.svg';
import { ReactComponent as UpIcon } from '../Icons/chevron-up-outline.svg';
import { ReactComponent as DownIcon } from '../Icons/chevron-down-outline.svg';


class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.removeToDoFn(this.props.itemIndex);
    }

    handleCheck() {
        // will handle the check btn
    }

    handleUp() {
        // will handle the up btn
    }

    handleDown() {
        // will handle the dwn btn
    }

    render() {

        return (
            <div className={ 'todo-container' }>
                <div className={ 'input' }>
                    {this.props.item}
                </div>
                <div className={ 'icons-container' }>
                    <div className={ 'icon-container' }>
                        <CheckmarkIcon className={ 'icon' } />
                    </div>
                    <div className={ 'icon-container' }>
                        <UpIcon className={ 'icon' } />
                    </div>
                    <div className={ 'icon-container' }>
                        <DownIcon className={ 'icon' } />
                    </div>
                    <div className={ 'icon-container' } onClick={ this.handleClose }>
                        <CloseIcon className={ 'icon' } />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;