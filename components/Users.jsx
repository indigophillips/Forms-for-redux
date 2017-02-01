import React, { PropTypes } from 'react'

import UserForm from './UserForm'

export default React.createClass({
  displayName: 'Users',

  render () {
    return (
      <div className="users">
        <div className="row">
          <div className="twelve columns">
            <ul>
              {this.props.users.map((user, i) => (
                <li key={i}>{user.firstName} {user.lastName} {user.phone} {user.mobile}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <UserForm />
        </div>
      </div>
    )
  },

  propTypes: {
    users: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string,
      mobile: PropTypes.string
    })).isRequired
  }
})
