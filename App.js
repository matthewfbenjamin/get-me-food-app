import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

import store from './store'
import Restaurant from './views/Restaurant'
import Distance from './views/Distance'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router>
            <Stack key="root">
              <Scene key="restaurant" component={Restaurant} title="Restaurant" />
              <Scene key="distance" component={Distance} title="Distance" />
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