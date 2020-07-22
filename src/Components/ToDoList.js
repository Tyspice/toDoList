import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.removeToDo = this.removeToDo.bind(this);
        this.toggleToDo = this.toggleToDo.bind(this);
        this.moveToDoUp = this.moveToDoUp.bind(this);
        this.moveToDoDown = this.moveToDoDown.bind(this);
    }

    removeToDo(_itemIndex) {
        this.props.removeToDoFn(_itemIndex);
    }

    toggleToDo(_checked, _itemIndex) {
        this.props.toggleToDoFn(_checked, _itemIndex);
    }

    moveToDoUp(_itemIndex) {
        this.props.moveToDoUpFn(_itemIndex);
    }

    moveToDoDown(_itemIndex) {
        this.props.moveToDoDownFn(_itemIndex)
    }
    
    render() {

        const items = this.props.toDos
        
        return (
            <div>
            { 
                items.map((_item, _index) => {
                    return(
                        <ToDoItem 
                        itemIndex={ _index }
                        key={ _index } 
                        item={ _item.toDo }
                        checked={ _item.checked } 
                        removeToDoFn={ this.removeToDo }
                        toggleToDoFn={ this.toggleToDo }
                        moveToDoUpFn={ this.moveToDoUp }
                        moveToDoDownFn={this.moveToDoDown } 
                        />
                    )
                }) 
            }
            </div>
        );

    }
}

export default ToDoList;


