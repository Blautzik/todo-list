import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import { useFonts } from 'expo-font';
import AddItem from './components/AddItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import { data } from './asyncmock';

export default function App() {

  const [todos, setTodos] = useState(data);
  const [itemTitle, setItemTitle] = useState('');
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [todosFilt, setTodosFilt] = useState([]);
  const [completedChange, setCompletedChange] = useState(true)

  const onHandleCompletedChange = (item) => {
    const element = todos.find(element => element.id === item.id)
    element.completed = !element.completed
    if(element.completed===true){
      element.status = 'completed'
    }else{
      element.status = 'pending'
    }
    setCompletedChange(!completedChange)
  }

  const onHandleAddItem = () => {
    itemTitle != '' &&
    setTodos(todos => [...todos, { id: Date.now().toString(), title: itemTitle, completed: false , status:'pending' }])
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

  const deleteItem = (item) =>{
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',item.id)
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

  const [fontsLoaded] = useFonts({
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Ligth': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-ExtraLight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-ExtraLightItalic': require('./assets/fonts/Raleway-ExtraLightItalic.ttf'),
    'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return
    <Text>cargando.....</Text>
  }

  return (
    <View className='flex-1 items-center justify-center w-full h-full bg-slate-800'>
      <LinearGradient colors={['#037298', '#004B65']} style={styles.background}>
        <FilterBar onHandleFilter={onHandleFilter}/>
        <List todos={todos} onHandleCompletedChange={onHandleCompletedChange} todosFilt={todosFilt} deleteItem={deleteItem}/>
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
    maxHeight:'90%',
    borderRadius: 25,
  },
});