import React from 'react';
import Background from './Background';

function Reusable(props) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
        </div>
    )
}


export default Reusable;
