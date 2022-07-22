import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, ListItem, Button } from '@rneui/themed';

const Swipe = ({tache,id, suppCallBack})=>{
    return (
        <ListItem.Swipeable

        rightContent={(supprimer) => (
            <Button
            title="Delete"
            onPress={() => suppCallBack(id)}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
        )}
        >
        <Icon name="bookmark" />
        <ListItem.Content>
            <ListItem.Title>{tache}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
        </ListItem.Swipeable>
    )
}


export default Swipe

const styles = StyleSheet.create({})