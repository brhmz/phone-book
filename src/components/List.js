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
        return (
            <div>
                <input className='filter-input'
                    name='filter' id='filter'
                    placeholder='Filter by name or number!'
                />
                <ul className='contact-list'>
                    {this.props.contacts.map(item => {
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
