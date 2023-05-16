import React, { Component } from 'react'
import '../styles/Components.css'

export default class List extends Component {
    render() {
        return (
            <div>
                <input className='filter-input' name='filter' id='filter' placeholder='Filter by name or number!'></input>
                <ul className='contact-list'>
                    <li className='list-item'>
                        <span>A1</span>
                        <span>N1</span>
                    </li>
                    <li className='list-item'>
                        <span>A2</span>
                        <span>N2</span>
                    </li>
                    <li className='list-item'>
                        <span>A3</span>
                        <span>N3</span>
                    </li>
                </ul>
            </div>
        )
    }
}
