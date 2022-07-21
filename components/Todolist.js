import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, ListItem, Button } from '@rneui/themed';


const initTask = [
    // {id:1, tache:"Réussir"},
    // {id:2, tache:"Faire le meilleur"}
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

        // Quand ...getTask est en bas, le plus récent se retrouve en haut de la liste
        setTask([
            {id:getTask.length+1,
            tache: getText
        },
        ...getTask,
    ])

        // Remise à zero de mon formulaire
        setText("")
    }

    const supprimer = (id) => {
        console.log("Les suppressions", id)

        // Variable temporaire pour filtrer tous les id différents de l'id sélectionné
        const filterTask = getTask.filter (item => item.id != id)

        // Permet la mise à niveau du filterTask
        setTask (filterTask)
    }

    const Swipe = ({tache,id})=>{
        return (
                        <ListItem.Swipeable

            rightContent={(reset) => (
                <Button
                title="Delete"
                onPress={() => supprimer(id)}
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                />
            )}
            >
            <Icon name="chevron-left" />
            <ListItem.Content>
                <ListItem.Title>{tache}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem.Swipeable>
        )
    }


  return (
    // <View>
    //     <HeaderTodo/>
    // </View>

    <SafeAreaView>
        <FlatList
        data={getTask}
        renderItem={
            ({item}) =>

            <Swipe 
            tache={item.tache}
            id={item.id}
            />

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

        // Message personnalisé si liste de tâche vide
        ListEmptyComponent={() => (
            <Text>Liste Vide</Text>
        )}

        // keyExtractor={item => item.id}
        />
    </SafeAreaView>


  )
}

export default Todolist

const styles = StyleSheet.create({})