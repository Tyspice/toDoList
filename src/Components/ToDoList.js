import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    
    render() {

        const items = this.props.toDos
        
        return (
            <div>
            { 
                items.map((_item, _key) => {
                    return(
                        <ToDoItem key={_key} _item={ _item } />
                    )
                }) 
            }
            </div>
        );

    }
}

export default ToDoList;


