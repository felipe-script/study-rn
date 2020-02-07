import React from 'react'
import { Text, View, Button } from 'react-native'

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add Color" />
      <View style={{ backgroundColor: 'rgb(0,255,0)', width: 100, height: 100 }} />
    </View>
  )
}
export default ColorScreen