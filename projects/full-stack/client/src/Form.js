import React, { Component } from 'react';

const d = new Date();
// const userInput = {Form Input}

class Form extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(`${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`);
    }

    render ( ) {
        return (
        <div className="Form">
            <form onSubmit={this.handleSubmit} >
                <input type="text" placeholder="hrs of sleep last night" />
                <button>Submit</button>
            </form>
        </div>
    )
    }
    
}

export default Form;