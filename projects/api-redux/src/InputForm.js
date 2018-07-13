import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from './redux'


class InputForm extends Component {
    constructor() {
        super()
        this.state = {
            country: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <form onSubmit = {this.handleSubmit} >
                <input value = {country} onChange={this.handleChange} type="text" placeholder= "Enter Country Name"
                />
                <button>Search</button>
            </form>
        )
    }
}

export default connect (null, { getCountry })(InputForm);
