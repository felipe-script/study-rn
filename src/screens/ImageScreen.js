import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
  const list = [
    {
      title: 'React',
      url: 'https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png'
    },
    {
      title: 'Coffe',
      url: 'https://images.unsplash.com/photo-1581068106017-b29553281b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1581059089599-0b7e13b9d952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ]

  const Image = list.map(item => <ImageDetail title={ item.title } url={ item.url } />)

  return (
    <View>
      { Image }
    </View>
  )
}
const styles = StyleSheet.create({})

export default ImageScreen