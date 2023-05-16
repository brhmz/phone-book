//Created by "rcc" snippet.
import React, { Component } from 'react'
import '../styles/Components.css'
import Form from './Form'
import List from './List'

class Contact extends Component {
    state = {
        contacts: [
            { name: "John Doe", phone: "+30619431275" },
            { name: "Felix Tafoya", phone: "+30638320457" },
            { name: "Christie Hickman", phone: "+30646253342" },
            { name: "Fred Fair", phone: "+30656337454" },
            { name: "Joann Halverson", phone: "+30618562743" }
        ]
    }
    render() {

        const addContact = (data) => {
            const { contacts } = this.state
            contacts.push(data)
            this.setState({ contacts: contacts })
        }

        return (
            <div>
                <h1>Contacts</h1>
                <List contacts={this.state.contacts} />
                <Form addContact={addContact} />
            </div>
        )
    }
}

export default Contact