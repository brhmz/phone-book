import '../styles/Components.css'
import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className='form'>
            <input className='form-input' name='name' id='name' placeholder='Enter contact name.'></input> <br/>
            <input className='form-input' name='phone' id='phone' placeholder='Enter phone number.'></input> <br/>
            <button>Add</button>
        </form>
      </div>
    )
  }
}
