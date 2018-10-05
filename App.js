import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Scene, Router, Stack, Actions as RouterActions } from 'react-native-router-flux';
import { globalStyles, peach } from './views/components/Styles'

import routes from './routes'
import store, { ReduxNavigator, ReduxRouter } from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ReduxRouter navigator={ReduxNavigator} />
          {/* <Router>
            {routes}
          </Router> */}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
})