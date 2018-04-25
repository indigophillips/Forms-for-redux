import {connect} from 'react-redux'

import Users from '../components/Users'

const mapStateToProps = ({users}) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(Users)
