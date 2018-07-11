import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            <h6>{props}</h6>
        </div>
    )
}

export default Todo;