import React from 'react'
import { Control, Form, actions } from 'react-redux-form'
import { addUser } from '../actions/users.js'

export default React.createClass({
  handleSubmit (user) {
    const { dispatch } = this.props

    dispatch(addUser(user))
    dispatch(actions.reset('forms.user'))
  },

  render () {
    return (
      <Form model="forms.user"
        onSubmit={user => this.handleSubmit(user)}>
        <label>First name:</label>
        <Control.text model=".firstName" />

        <label>Last name:</label>
        <Control.text model=".lastName" />

        <label>Mobile:</label>
        <Control.text model=".mobile" />

        <button type="submit">
          AddUser
        </button>
      </Form>
    )
  }
})

