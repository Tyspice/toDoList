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
        this.handleCheck = this.handleCheck.bind(this);
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }

    handleClose() {
        this.props.removeToDoFn(this.props.itemIndex);
    }

    handleCheck() {
        // will handle the check btn
        this.props.toggleToDoFn(this.props.checked, this.props.itemIndex);
    }

    handleUp() {
        // will handle the up btn
        this.props.moveToDoUpFn(this.props.itemIndex);
    }

    handleDown() {
        // will handle the dwn btn
        this.props.moveToDoDownFn(this.props.itemIndex);
    }

    render() {

        return (
            <div className={ 'todo-container' + (this.props.checked ? ' checked' : '')}>
                <div className='input'>
                    {this.props.item}
                </div>
                <div className='icons-container'>
                    <div className='icon-container' onClick={ this.handleCheck }>
                        <CheckmarkIcon className='icon' />
                    </div>
                    <div className='icon-container' onClick={ this.handleUp }>
                        <UpIcon className='icon' />
                    </div>
                    <div className='icon-container' onClick={ this.handleDown }>
                        <DownIcon className='icon' />
                    </div>
                    <div className='icon-container' onClick={ this.handleClose }>
                        <CloseIcon className='icon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;