import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button'
const Main = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={styles.buttonWrapper}>
        <Button
          onPress={props.dataActions.setCafe}
          title="Cafes"
        />
        <Button
          onPress={props.dataActions.setRestaurant}
          title="Restaurants"
        />
        <Button
          onPress={props.dataActions.setBar}
          title="Bars"
        />
      </View>
      <View style={{flex: 2}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA5C12',
  },
  buttonWrapper: {
    flex: 2,
    justifyContent: 'space-around',
  }
})

export default Main
