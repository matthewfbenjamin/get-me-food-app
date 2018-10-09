import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../components/Button'
import {globalStyles, indigo, peach} from '../components/Styles'

const Main = (props) => {
  return (
    <View style={globalStyles.viewContainer}>
      {/* <View style={{ flex: 1 }} /> */}
      <View style={styles.container}>
        <Button
          onPress={() => props.selectMoney(1)}
          title={props[1].title}
          additionalBtnStyle={[props[1].selected && styles.selectedButton, { marginBottom: 10 }]}
          additionalTextStyle={props[1].selected && styles.selectedText}
        />
        <Button
          onPress={() => props.selectMoney(2)}
          title={props[2].title}
          additionalBtnStyle={props[2].selected && styles.selectedButton}
          additionalTextStyle={props[2].selected && styles.selectedText}
        />
        <Button
          onPress={() => props.selectMoney(3)}
          title={props[3].title}
          additionalBtnStyle={props[3].selected && styles.selectedButton}
          additionalTextStyle={props[3].selected && styles.selectedText}
        />
        <Button
          onPress={() => props.selectMoney(4)}
          title={props[4].title}
          additionalBtnStyle={props[4].selected && styles.selectedButton}
          additionalTextStyle={props[4].selected && styles.selectedText}
        />
        <Button
          onPress={props.showResults}
          title={'Next'}
          additionalBtnStyle={{marginTop: 30}}
      />
      </View>
      {/* <View style={{flex: 1}} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  selectedButton: {
    backgroundColor: indigo,
  },
  selectedText: {
    color: peach
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Main
