import React from 'react'
import {connect} from 'react-redux'
import {Control, Form, actions} from 'react-redux-form'

import {addUser} from '../actions/users.js'

class UserForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (user) {
    const {dispatch} = this.props
    dispatch(addUser(user))
    dispatch(actions.reset('forms.user'))
  }

  render () {
    return (
      <Form model="forms.user"
        onSubmit={this.handleSubmit}>
        <div className="four columns">
          <label>First name:</label>
          <Control.text model=".firstName" />
        </div>

        <div className="four columns">
          <label>Last name:</label>
          <Control.text model=".lastName" />
        </div>

        <div className="four columns">
          <label>Mobile:</label>
          <Control.text model=".mobile" />
        </div>

        <hr />
        <button type="submit">Add</button>
      </Form>
    )
  }
}

export default connect()(UserForm)
