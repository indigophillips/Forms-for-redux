import { connect } from 'react-redux'

import Users from '../components/Users'

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

