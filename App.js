import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todolist from './components/Todolist'

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      <Todolist/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})