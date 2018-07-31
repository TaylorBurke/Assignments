import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)

    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/sleep', {
            date: new Date(),
            sleepHours: this.state.hours
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit} >

                    <input type="text" name= "hours"  placeholder="hrs of sleep last night" onChange={this.handleChange}/>
                    <button>Submit</button>

                </form>
            </div>
        )
    }

}

export default Form;