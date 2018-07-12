import React from "react";
import { connect } from 'react-redux';
import Person from './Person';

function Contacts(props) {

    const contactList = props.contacts.map ((contact, i) => {
        return (
           <Person key={contact.name} contact = {contact} i = {i} />
        )
    })
    return (
    <div>
        {contactList}
    </div>
    )

}


export default connect(state => state, {})(Contacts);