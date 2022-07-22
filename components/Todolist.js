import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Input, Icon, ListItem, Button, SpeedDial } from '@rneui/themed';
import Swipe from './Swipe';
import DialogInput from 'react-native-dialog-input';


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



    const ajouter = (textValue) => {
        
        console.log("Voir les ajouts", textValue)

        // Quand ...getTask est en bas, le plus récent se retrouve en haut de la liste
        setTask([
            {id:getTask.length+1,
            tache: textValue
        },
        ...getTask,
    ])

        // Remise à zero de mon formulaire
        setText("")

        setOpenDialog(!openDialog)


    }




    const supprimer = (id) => {
        console.log("Les suppressions", id)

        // Variable temporaire pour filtrer tous les id différents de l'id sélectionné
        const filterTask = getTask.filter (item => item.id != id)

        // Permet la mise à niveau du filterTask
        setTask (filterTask)
    }

    
    const [open, setOpen] = React.useState(false);

    const [openDialog, setOpenDialog] = React.useState(false);

    

  return (

    <SafeAreaView>
        <FlatList
        data={getTask}
        renderItem={
            ({item}) =>

            <Swipe 
            tache={item.tache}
            id={item.id}
            suppCallBack = {supprimer}
            />

        }


        // Message personnalisé si liste de tâche vide
        // ListEmptyComponent={() => (
        //     <Text>Liste Vide</Text>
        // )}

        // keyExtractor={item => item.id}
        />

        <DialogInput isDialogVisible={openDialog}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {ajouter(inputText)} }
            closeDialog={ () => {setOpenDialog(!openDialog)}}>
        </DialogInput>

        <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpenDialog(!openDialog)}
                onClose={() => setOpenDialog(!openDialog)}
                style={{height:750}}
                >
        <SpeedDial.Action
        icon={{ name: 'add', color: '#fff' }}
        title="Add"
        onPress={() => setOpenDialog(!openDialog)}
        />
            
        </SpeedDial>

    </SafeAreaView>

    

        
  )
}

export default Todolist

const styles = StyleSheet.create({})