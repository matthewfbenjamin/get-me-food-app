import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  componentDidMount() {
    const { searchTerm, location, searchRadius, money } = this.props
    // this.props.dataActions.getResults(searchTerm, location.latitude, location.longitude, searchRadius, money.toString())
  }
  
  componentDidUpdate(prevProps) {
    // if (prevProps.searchRadius !== this.props.searchRadius) {
    //   routerActions.money()
    // }
  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

/*
 {
  "limit": 20,
  "location": Object {
    "error": null,
    "latitude": 37.785834,
    "longitude": -122.406417,
    "requesting": false,
  },
  "money": Array [
    1,
    4,
  ],
  "offset": 0,
  "searchRadius": 1000,
  "searchTerm": "cafe",
}
*/