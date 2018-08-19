import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Restaurant Page
      </Text>
      <Button
        onPress={props.getCafes}
        title="Cafes"
        color="#841584"
        accessibilityLabel="Get Cafes"
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
