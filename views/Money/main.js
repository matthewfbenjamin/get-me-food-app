import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Distance View
      </Text>
      <Button
        onPress={props.dataActions.setThreeMinutes}
        title="3 Minutes"
        color="#841584"
        accessibilityLabel="3 Minutes"
      />
      <Button
        onPress={props.dataActions.setTenMinutes}
        title="10 Minutes"
        color="#841584"
        accessibilityLabel="10 Minutes"
      />
      <Button
        onPress={props.dataActions.setTwentyMinutes}
        title="20 Minutes"
        color="#841584"
        accessibilityLabel="20 Minutes"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main
