import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button'
import { globalStyles } from '../components/Styles'

const Main = (props) => {
  return (
    <View style={globalStyles.viewContainer}>
      <View style={{ flex: 1 }} />
      <View style={globalStyles.buttonWrapper}>
        <Button
          onPress={props.dataActions.setThreeMinutes}
          title="3 Minutes"
        />
        <Button
          onPress={props.dataActions.setTenMinutes}
          title="10 Minutes"
        />
        <Button
          onPress={props.dataActions.setTwentyMinutes}
          title="20 Minutes"
        />
      </View>
      <View style={{ flex: 2 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main
