import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const friends = [
  { name: 'Friends#1', id: '1', age: 20 },
  { name: 'Friends#2', id: '2', age: 21 },
  { name: 'Friends#3', id: '3', age: 22 },
  { name: 'Friends#4', id: '4', age: 23 },
  { name: 'Friends#5', id: '5', age: 25 },
  { name: 'Friends#6', id: '6', age: 26 },
  { name: 'Friends#7', id: '7', age: 27 },
  { name: 'Friends#8', id: '8', age: 28 },
]

const ListScreen = () => {
  return (<FlatList
    showsHorizontalScrollIndicator={ false }
    data={friends} renderItem={({ item }) => {
      return <Text style={styles.textName}> {item.name} - Age {item.age}</Text>
    }} keyExtractor={item => item.id} />)
}

const styles = StyleSheet.create({
  textName: {
    marginVertical: 50
  }
})

export default ListScreen