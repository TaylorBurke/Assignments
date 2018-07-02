import React, {Component} from 'react'

function User(props) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
        </div>
    )
}

export default User
