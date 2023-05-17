import '../styles/Components.css'
import React, { Component } from 'react'

export default class Form extends Component {
  state = { name: '', phone: '' }
  render() {

    const onSubmitFuntion = (e) => {
      e.preventDefault();
      inputCleaner();
      if (this.state.name === '') {
        alert("Name can not be blank!")
      } else {
        this.props.addContact({ ...this.state })
        this.setState({ name: '', phone: '' })
      }
    }

    const inputCleaner = () => {
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
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
