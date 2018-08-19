import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  render () {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  getCafes: actions.getCafes
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);