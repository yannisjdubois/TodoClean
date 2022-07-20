import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon } from '@rneui/themed';

const Todolist = () => {
    const [getText, setText] = useState("");

    // Détection des évènements associés à mon action
    const textChange = (textValue) => {
        console.log("Changement du texte", textValue)

        // Mise à jour de la valeur de mon texte
        setText(textValue)
    }
  return (
    <View>
      <Input
      placeholder='Boudin Input la'
      leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
      onChangeText = {textChange}
      value={getText}
      
        />
    </View>
  )
}

export default Todolist

const styles = StyleSheet.create({})