import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon } from '@rneui/themed';

const Todolist = () => {
    const [getText, setText] = useState("");

    // Détection des changement sur mon input
    const textChange = (textValue) => {
        console.log("Changement du texte", textValue)

        // Mise à jour de la valeur de mon texte
        setText(textValue)
    }
    const ajouter = () => {
        console.log("Voir les ajouts", getText)
    }

    const HeaderTodo = () => {
        return(
            <View>
        <Input
        placeholder='Boudin Input la'
        onChangeText = {textChange}
        value={getText}
        rightIcon={
            <Icon
            name='chevron-right'
            size={30}
            color='black'
            onPress={ajouter}
        />
        }
        
            />
        </View>
        )
    }
  return (
    <View>
        <HeaderTodo>

        </HeaderTodo>
    </View>
  )
}

export default Todolist

const styles = StyleSheet.create({})