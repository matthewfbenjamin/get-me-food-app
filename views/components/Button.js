import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { peach, indigo } from './Styles'
const Button = (props) => (
  <TouchableOpacity
    style={styles.button}
    onPress={props.onPress}
  >
    <Text style={styles.text}>{props.title.toUpperCase()}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: peach,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%',
    borderRadius: 10,
  },
  text: {
    color: indigo,
    letterSpacing: 2,
    fontWeight: '700',
    fontSize: 20,
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
})

export default Button
