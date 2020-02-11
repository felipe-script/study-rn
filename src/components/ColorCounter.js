import React from 'react'
import { View, Text, Button } from 'react-native'

<<<<<<< HEAD
const ColorCounter = () => {
  return <View>
    <Text>RED</Text>
    <Button title="Increase RED"></Button>
    <Button title="Decrease RED"></Button>
  </View>
=======
const ColorCounter = ( { color, onIncrease, onDecrease } ) => {
  return (
    <View>
      <Text>{ color }</Text>
      <Button title={`Increase ${color}`}  onPress={ () => onIncrease() } />
      <Button title={`Decrease ${color}`} onPress={ () => onDecrease() } />
    </View>
  )
>>>>>>> a4544d47bd137cd807d04ab4864bcc84bae6adf2
}
export default ColorCounter