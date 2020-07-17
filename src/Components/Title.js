import React from 'react';

const Title = (props) => {

    let styles = {
        color: 'white'
    };

    return (
        <h1 style={ styles } >
        { props.title }
        </h1>
    );
}

export default Title;