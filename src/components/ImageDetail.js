import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetail = (props) => {
  return (
    <View>
      <Text>show of {props.title}</Text>
      <Image source={{ uri: props.url }}
        style={{ width: 50, height: 50 }} />
    </View>
  )
}

export default ImageDetail