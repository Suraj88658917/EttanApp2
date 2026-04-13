import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Visa from "./src/assets/images/Visa.svg";

const App = () => {
  return (
    <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <Text>App</Text>
      <Visa width={90} height={90}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})