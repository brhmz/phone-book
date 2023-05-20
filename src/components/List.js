import React, { Component } from 'react'
import '../styles/Components.css'
import PropsTypes from 'prop-types'

export default class List extends Component {

    static propTypes = {
        contacts: PropsTypes.array.isRequired
    }
    state = { filterInput: '' }
    render() {
        const onChangeFilter = (e) => {
            this.setState({ filterInput: e.target.value })
        }

        const filteredContacts = this.props.contacts.filter(
            item => {
                return item.name.toLowerCase().indexOf(this.state.filterInput.toLowerCase()) !== -1
                    || item.phone.toLowerCase().indexOf(this.state.filterInput.toLowerCase()) !== -1
            }
        )

        return (
            <div>
                <input className='filter-input'
                    onChange={onChangeFilter}
                    value={this.state.filterInput}
                    name='filter' id='filter'
                    placeholder='Filter by name or number!'
                />
                <ul className='contact-list'>
                    {filteredContacts.map(item => {
                        return (
                            <li className='list-item' key={item.phone}>
                                <span>{item.name}</span>
                                <span>{item.phone}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
