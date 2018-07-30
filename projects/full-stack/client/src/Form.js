import React, { Component } from 'react';
// import axios from 'axios';

// const d = new Date();
// const data = new FormData(event.target);

class Form extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        // axios.post('/sleep', {
        //     year: `${d.getFullYear()}`,
        //     month: `${d.getMonth()}`,
        //     day: `${d.getDate()}`,
        //     sleepHours: {userInput}

        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        
    }


    render() {
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