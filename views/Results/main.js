import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import {globalStyles, purple} from '../components/Styles'

const Main = (props) => {
  console.log(props.cardToShow)
  return (
    <View style={globalStyles.viewContainer}>
      {props.data.results.resultsArray.length > 0
        ? <View style={styles.yelpContainer}>
        </View>
        : <View style={{ flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={purple} />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main
