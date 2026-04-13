import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text style={{fontSize:23 , fontFamily:"Poppins-Bold"}}>This is App2</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1 ,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"pink"
  }
})