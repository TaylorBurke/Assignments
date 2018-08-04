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

    }

    handleSubmit(e) {
        document.getElementById("injector").innerHTML="Thanks for the info!";
        e.preventDefault();

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
            <div id="injector">How many hours of sleep did you get last night?</div>
                <form onSubmit={this.handleSubmit} >

                    <input type="text" name= "hours"  placeholder="Enter a number value" onChange={this.handleChange}/>
                    <button>Submit</button>

                </form>

                
            </div>
        )
    }

}

export default Form;