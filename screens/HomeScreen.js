import { Text, View, StyleSheet } from 'react-native';
import List from '../components/List';
import { useFonts } from 'expo-font';
import AddItem from '../components/AddItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useLayoutEffect } from 'react';
import FilterBar from '../components/FilterBar';
import { data } from '../asyncmock';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false,
        })
    })

  const [todos, setTodos] = useState(data);
  const [itemTitle, setItemTitle] = useState('');
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [todosFilt, setTodosFilt] = useState([]);
  const [completedChange, setCompletedChange] = useState(true)

  const onHandleCompletedChange = (item) => {
    const element = todos.find(element => element.id === item.id)
    element.completed = !element.completed
    if (element.completed === true) {
      element.status = 'completed'
    } else {
      element.status = 'pending'
    }
    setCompletedChange(!completedChange)
  }

  const onHandleAddItem = () => {
    itemTitle != '' &&
      setTodos(todos => [...todos, { id: Date.now().toString(), title: itemTitle, completed: false, status: 'pending' }])
    setCompletedChange(!completedChange)
    setFilter('showall')
    setItemTitle('')
    setValue('')
  }

  const onHandleInput = (text) => {
    setItemTitle(text)
    setValue(text)
  }

  const onHandleFilter = (status) => {
    setFilter(status)
  }

  const deleteItem = (item) => {
    setTodos(todos => todos.filter(e => e.id != item.id))
    setCompletedChange(!completedChange)
  }

  useEffect(() => {
    if (filter === 'all' || filter === 'showall') {
      setTodosFilt(todos)
    } else if (filter === 'pending') {
      setTodosFilt(todos.filter(e => e.status === 'completed'))
    } else if (filter === 'completed') {
      setTodosFilt(todos.filter(e => e.status === 'pending'))
    }
  }, [filter, completedChange])



  return (
      <View className='flex-1 items-center justify-center w-full h-full bg-slate-800'>
        <LinearGradient colors={['#037298', '#004B65']} style={styles.background}>
          <FilterBar onHandleFilter={onHandleFilter} />
          <List todos={todos} onHandleCompletedChange={onHandleCompletedChange} todosFilt={todosFilt} deleteItem={deleteItem} />
          <AddItem onHandleAddItem={onHandleAddItem} onHandleInput={onHandleInput} value={value} />
        </LinearGradient>
      </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 'auto',
    maxHeight: '90%',
    borderRadius: 25,
  },
});