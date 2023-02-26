import { FlatList, StyleSheet, Text, View } from 'react-native';
import Item from './Item'

const List = ({ todosFilt , todos , onHandleCompletedChange , deleteItem }) => {
    console.log('todos',todos)
    console.log('filt', todosFilt)

    return (
        <FlatList
            data={todosFilt}
            renderItem={({ item }) => <Item title={item.title} completed={item.completed} handleChange={onHandleCompletedChange} item={item} deleteItem={deleteItem}/>}
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
        maxHeight:700
    },
});