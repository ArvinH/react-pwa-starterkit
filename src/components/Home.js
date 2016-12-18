import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'


class Home extends Component {
  render () {
    return (
      <h1>Home Page</h1>
    )
  }
}

export default connect(
  state => {{}},
  dispatch => {{}},
)(Home)