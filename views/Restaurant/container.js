import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  componentDidMount () {
    this.props.dataActions.getLocation(navigator)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm && this.props.searchTerm.length > 0) {
      routerActions.distance()
    }
    if (this.props.scene === 'restaurant' && prevProps.scene !== 'restaurant') {
      this.props.dataActions.clearSearchTerm()
    }
  }

  render () {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.data.searchTerm,
    scene: state.router.scene
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);