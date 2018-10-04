import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  componentDidMount () {
    // console.log(navigator.geolocation)
    this.props.dataActions.getLocation(navigator)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
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
    searchTerm: state.searchTerm,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);