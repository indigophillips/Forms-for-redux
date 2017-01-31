import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import users from './users'

const user = {
  firstName: '',
  lastName: '',
  phone: '',
  mobile: ''
}

export default combineReducers({
  users,
  forms: combineForms({ user }, 'forms')
})

