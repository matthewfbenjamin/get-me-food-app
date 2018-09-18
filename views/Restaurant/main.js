import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.container}>
      <Text>
        Restaurant Page
      </Text>
      <Button
        onPress={props.dataActions.setCafe}
        title="Cafes"
        color="#841584"
        accessibilityLabel="Cafes"
      />
      <Button
        onPress={props.dataActions.setRestaurant}
        title="Restaurants"
        color="#841584"
        accessibilityLabel="Restaurants"
      />
      <Button
        onPress={props.dataActions.setBar}
        title="Bars"
        color="#841584"
        accessibilityLabel="Bars"
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
