import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('this.state: ', this.props.cafes)
    console.log('prevProps: ', prevProps.cafes)
    if (
      (prevProps.cafes.loading && !this.props.cafes.loading) &&
      (!prevProps.cafes.finished && this.props.cafes.finished)) {
        routerActions.distance()
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
    cafes: state.cafes
  }
}

const mapDispatchToProps = {
  getCafes: actions.getCafes
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);