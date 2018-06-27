import React from 'react'
import Avatar from './Avatar'

function Comment(props) {
    return (
        <div>
            <div>
                <Avatar userImg={props.user.image} />
            </div>
            <div>
                <p>{props.user.text}</p>
            </div>
            <div>
                <p>{props.user.date}</p>
            </div>
        </div>
    )
}

export default Comment
