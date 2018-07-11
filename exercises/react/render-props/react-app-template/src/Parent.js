import React from 'react';
import Child from './Child'

function Parent(props) {
    return (
        <div>
            <h1>What's the difference between Social Security and Bitcoin?</h1>
            <Child>
                <div class="grid-container">
                    <div class = "HelloWord">
                <h2>One is a giant</h2> <h1> ponzi scheme,</h1> <h2> the other one is a cryptocurrency</h2>
                </div>
                </div>
            </Child>
        </div>
    )
}

export default Parent;