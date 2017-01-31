import React, {PropTypes} from 'react'

import UserForm from './UserForm'

export default React.createClass({
  displayName: 'Users',

  render () {
    return (
      <div className="users">
        <ul>
          {this.props.users.map((user, i) => (
            <li key={i}>{user.firstName} {user.lastName} {user.phone} {user.mobile}</li>
          ))}
        </ul>
        <UserForm dispatch={this.props.dispatch} />
      </div>
    )
  },

  propTypes: {
  }
})
