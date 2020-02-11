import React, {useState} from 'react'
import { Text, View, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [colors, setColor] = useState([])

  return (
    <View>
      <Button title="Add Color" onPress={() =>{
        setColor([...colors, randomRgb()])
      }}/>
      
      <FlatList keyExtractor={item => item}
      data={colors}
      renderItem={({item}) => {
        return <View style={{ backgroundColor: item, width: 100, height: 100 }} />
      }}
      />
    </View>
  )
}
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}
export default ColorScreen