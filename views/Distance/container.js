import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.searchRadius !== this.props.searchRadius) {
      routerActions.money()
    }
    if (this.props.scene === 'distance' && prevProps.scene === 'money') {
      this.props.dataActions.clearDistance()
    }
  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    searchRadius: state.data.searchRadius
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);