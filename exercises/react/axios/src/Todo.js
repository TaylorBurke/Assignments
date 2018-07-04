import React from 'react';

function Todo(props) {
    const myTodos = props.info.map(todo => {
        return <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>

        </div>
    })
    return (
        <div>
            {myTodos}
        </div>
    )
}

export default Todo;