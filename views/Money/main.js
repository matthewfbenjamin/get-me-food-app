import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const Main = (props) => {
  const { moneyValues, selectMoney } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, props[1].selected && styles.selectedButton]}
        onPress={() => props.selectMoney(1)}
      >
        <Text>{props[1].title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, props[2].selected && styles.selectedButton]}
        onPress={() => props.selectMoney(2)}
      >
        <Text>{props[2].title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, props[3].selected && styles.selectedButton]}
        onPress={() => props.selectMoney(3)}
      >
        <Text>{props[3].title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, props[4].selected && styles.selectedButton]}
        onPress={() => props.selectMoney(4)}
      >
        <Text>{props[4].title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // style={[styles.button, props.four.selected && styles.selectedButton]}
        onPress={props.showResults}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '95%',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

export default Main
