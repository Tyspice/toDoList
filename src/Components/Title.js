import React from 'react';

const Title = (props) => {

    let titleStyles = {
        color: 'black'
    };

    return (
        <div>
            <h1 style={ titleStyles } >
            { props.title }
            </h1>
        </div>
    );
}

export default Title;