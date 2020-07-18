import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.removeToDo = this.removeToDo.bind(this);
    }

    removeToDo(itemIndex) {
        this.props.removeToDoFn(itemIndex);
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
                        item={ _item } 
                        removeToDoFn={ this.removeToDo } 
                        />
                    )
                }) 
            }
            </div>
        );

    }
}

export default ToDoList;


