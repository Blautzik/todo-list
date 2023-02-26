
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState , useEffect } from 'react';
import Item from './Item'

const List = ({ todosFilt , todos , onHandleCompletedChange }) => {


    return (
        todosFilt &&
        <FlatList
            data={todosFilt}
            renderItem={({ item }) => <Item style={styles.item} title={item.title} completed={item.completed} handleChange={onHandleCompletedChange} item={item}/>}
            keyExtractor={item => item.id}
            style={styles.lista}
        />
    )
}

export default List


const styles = StyleSheet.create({
    lista: {
        width: 300,
        margin: 5,
    },
    item: {
        marginVertical: 50,
    }
});