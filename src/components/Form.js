import '../styles/Components.css'
import React, { Component } from 'react'

export default class Form extends Component {
  state = { name: '', phone: '' }
  render() {

    const onSubmitFuntion = (e) => {
      e.preventDefault()
      this.props.addContact({ ...this.state })
    }

    return (
      <div>
        <form className='form'>
          <input
            className='form-input'
            name='name' id='name'
            placeholder='Enter contact name.'
            value={this.props.name}
            onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
          /> <br />
          <input
            className='form-input'
            name='phone' id='phone'
            placeholder='Enter phone number.'
            value={this.props.phone}
            onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
          /> <br />
          <button onClick={onSubmitFuntion}>Add</button>
        </form>
      </div>
    )
  }
}
