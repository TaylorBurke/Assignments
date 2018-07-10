import React, { Component } from "react";

import { connect } from "react-redux";
import { delContact } from "./redux";



class Person extends Component {
    constructor() {
        super();
        this.state = {}
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        e.preventDefault();
        this.props.delContact(+e.target.value)
    }
    render(){
        return (
            <div>
                <h4>{this.props.contact.name}</h4>
                <h3>{this.props.contact.email}</h3>
                <h5>{this.props.contact.phone}</h5>
                <button onClick={this.handleDelete} value={this.props.i} >Delete</button>
            </div >
        )
    }
}

// connect to redux for the array of contacts

export default connect (null, {delContact}) (Person);