import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Scene, Router, Stack, Actions as RouterActions } from 'react-native-router-flux';
import { globalStyles, peach } from './views/components/Styles'

import store from './store'
import Restaurant from './views/Restaurant'
import Distance from './views/Distance'
import Money from './views/Money'
import Results from './views/Results'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router headerTitleStyle={globalStyles.text} headerStyle={{ backgroundColor: peach}}>
              <Stack key="root">
              <Scene key="restaurant" component={Restaurant} title="Restaurant" />
              <Scene key="distance" back onBack={RouterActions.pop} component={Distance} title="Distance" />
              <Scene key="money" component={Money} title="Money" />
              <Scene key="results" component={Results} title="Results" />
            </Stack>
          </Router>
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