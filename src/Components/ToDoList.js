import React from 'react';

class ToDoList extends React.Component {
    
    render() {

        const items = this.props.toDos
        
        return (
            <div>
            { 
                items.map((item, key) => {
                    return(
                        <div key={key}> {item} </div>
                    )
                }) 
            }
            </div>
        );

    }
}

export default ToDoList;


