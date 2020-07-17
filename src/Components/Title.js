import React from 'react';

const Title = (props) => {

    let styles = {
        color: 'white'
    };

    return (
        <div>
            <h1 style={ styles } >
            { props.title }
            </h1>
        </div>
    );
}

export default Title;