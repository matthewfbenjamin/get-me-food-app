import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cardIdx: 0,
      cardToShow: {},
    }

  }
  componentDidMount() {
    const { searchTerm, location, searchRadius, money, limit, offset } = this.props.data
    this.props.dataActions.getResults(searchTerm, location.latitude, location.longitude, searchRadius, money.toString(), limit, offset)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.data.results.resultsArray.length !== this.props.data.results.resultsArray.length) {
      const cardToShowId = this.props.data.results.resultsArray[this.state.cardIdx]
      const cardToShow = this.props.data.results.resultsObj[cardToShowId]
      this.setState({ cardToShow })
    }
    if (prevProps.data.results.resultsArray.length - 1 === this.state.newIdx) {
      const { searchTerm, location, searchRadius, money, limit, offset } = this.props.data
      const newOffset = offset + limit
      this.props.dataActions.getResults(searchTerm, location.latitude, location.longitude, searchRadius, money.toString(), limit, newOffset)
      this.props.dataActions.updateOffset(newOffset)
    }
  }

  showNextCard = () => {
    const newIdx = this.state.cardIdx + 1
    const newCardId = this.props.data.results.resultsArray[newIdx]
    const newCardToShow = this.props.data.results.resultsObj[newCardId]
    this.setState({
      cardIdx: newIdx,
      cardToShow: newCardToShow,
    })
  }

  render() {
    return (
      <Main
        {...this.props}
        {...this.state}
        showNextCard={this.showNextCard}
      />
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