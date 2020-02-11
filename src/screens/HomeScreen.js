import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"
import ComponentScreen from "./ComponentScreen"

const HomeScreen = ( { navigation } ) => {
  return (
    <View>
       <Text style={styles.text}>HomeScreen</Text>
       <Button title="to components" onPress={ () => navigation.navigate('Components') } />
       <Button title="to list" onPress={ () => navigation.navigate('List') } />
       <Button title="to image" onPress={ () => navigation.navigate('Image') } />
       <Button title="to Counter" onPress={ () => navigation.navigate('Counter') } />
       <Button title="to Color" onPress={ () => navigation.navigate('Color') } />
       <Button title="to Square" onPress={ () => navigation.navigate('Square') } />
    </View>
  )
};
/*
const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen</Text>
};
*/

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
