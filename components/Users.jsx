import React from 'react'

import UserForm from './UserForm'

const Users = props => (
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

export default Users
