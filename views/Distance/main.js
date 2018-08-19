import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Distance Page
      </Text>
      <Button
        onPress={() => { console.log('On distance page') }}
        title="1 Mile"
        color="#841584"
        accessibilityLabel="Choose One Mile"
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
