import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import autobind from 'class-autobind'

import Main from './main'
import { actions } from '../../data'
class Container extends Component {
  constructor (props) {
    super(props)
    // const MONEY_DATA = [{ key: 'oneMoney', title: '$' }, { key: 'twoMoney', title: '$$' }, { key: 'threeMoney', title: '$$$' }, { key: 'fourMoney', title: '$$$$' }]
    this.state = {
      1: {
        title: '$',
        selected: false,
      },
      2: {
        title: '$$',
        selected: false,
      },
      3: {
        title: '$$$',
        selected: false,
      },
      4: {
        title: '$$$$',
        selected: false,
      },
      selectedArray: [],
    }
    // autobind(this)
  }

  selectMoney = (value) => {
    const selectedArrClone = [...this.state.selectedArray]
    const index = selectedArrClone.indexOf(value)
    if (index > -1) {
        selectedArrClone.splice(index, 1);
    } else {
      selectedArrClone.push(value)
    }
    // const newSelected = this.state.selectedArray.includes(value) ? 
    this.setState({
      [value]: {
        ...this.state[value],
        selected: !this.state[value].selected
      },
      selectedArray: selectedArrClone,
    })
  }

  showResults = () => {
    this.props.dataActions.setMoneyArray(this.state.selectedArray)
    routerActions.results()
  }

  render () {
    return (
      <Main
        {...this.props}
        {...this.state}
        selectMoney={this.selectMoney}
        showResults={this.showResults} />
    )
  }
}

const mapStateToProps = state => {
  return {
    searchRadius: state.searchRadius
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(actions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);