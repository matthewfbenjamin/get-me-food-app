import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button'
import { globalStyles } from '../components/Styles'

const Main = (props) => {
  return (
    <View style={globalStyles.viewContainer}>
      <View style={{flex: 1}} />
      <View style={globalStyles.buttonWrapper}>
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

export default Main
