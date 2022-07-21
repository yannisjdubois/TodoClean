import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, ListItem } from '@rneui/themed';

const initTask = [
    {id:1, tache:"Réussir"},
    {id:2, tache:"Faire le meilleur"}
]

const Todolist = () => {
    const [getText, setText] = useState("");

    const [getTask, setTask] = useState(initTask);

    // Détection des changement sur mon input
    const textChange = (textValue) => {
        console.log("Changement du texte", textValue)

        // Mise à jour de la valeur de mon texte
        setText(textValue)
    }
    const ajouter = () => {
        console.log("Voir les ajouts", getText)

        setTask([...getTask,
            {id:getTask.length+1,
            tache: getText
        }])
    }


  return (
    // <View>
    //     <HeaderTodo/>
    // </View>

    <SafeAreaView>
        <FlatList
        data={getTask}
        renderItem={
            ({item})=><Text>{item.tache}</Text>
        }
        ListHeaderComponent={
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
        }
        // keyExtractor={item => item.id}
        />
    </SafeAreaView>


  )
}

export default Todolist

const styles = StyleSheet.create({})