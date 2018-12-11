import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from './redux'


class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            country: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    //    look up the get request and create an item in a list that links back to it

    // this.state

    // JSON.stringify() to save to local storage
    }


    handleChange(e) {
        const { value } = e.target;
        this.setState({
            country: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getCountry(this.state.country)
    }

    render(){
        const {country} = this.state;
        return (
            <div className = "search">
            <form onSubmit = {this.handleSubmit} >
                <input value = {country} onChange={this.handleChange} type="text" placeholder= "Enter Country Name"
                />
                <div className = "searchButton">

                <button>Search</button>
                </div>
            </form>
            </div>
        )
    }
}

export default connect (null, { getCountry })(InputForm);
