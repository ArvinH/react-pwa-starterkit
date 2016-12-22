import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'


class Home extends Component {
  render () {
    return (
      <div style={{backgroundColor: 'white'}}>
        sdfsdf
      </div>
    )
  }
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {}
  }
)(Home)
