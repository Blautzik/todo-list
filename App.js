import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import { useFonts } from 'expo-font';
import AddItem from './components/AddItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import { getData, getFilteredData , data } from './asyncmock';

export default function App() {

  const [todos, setTodos] = useState(data);
  const [itemTitle, setItemTitle] = useState('');
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [todosFilt, setTodosFilt] = useState([]);
  const [visibility, setVisibility] = useState([]);

  const onHandleCompletedChange = (item) => {
    const element = todos.find(element => element.id === item.id)
    element.completed = !element.completed
  }

  const onHandleAddItem = () => {
    itemTitle &&
    setTodosFilt(todos => [...todos, { id: Date.now().toString(), title: itemTitle, completed: false , status:'pending' }])
    setItemTitle('')
    setValue('')
    console.log('agrego a todosfile',todosFilt)
  }

  const onHandleInput = (text) => {
    setItemTitle(text)
    setValue(text)
  }

  const onHandleFilter = (status) => {
    setFilter(status)
    console.log('status',status)

  }


    useEffect(() => {
      console.log('filter',filter)
      if (filter === 'all') {
          setTodosFilt(todos)
          console.log('todas',todosFilt)
      } else if (filter === 'pending') {
        setTodosFilt(todos.filter(e => e.status === 'completed'))
        console.log('useffce compel',todosFilt)
      } else if (filter === 'completed') {
        setTodosFilt(todos.filter(e => e.status === 'pending'))
        console.log('useffce pendin',todosFilt)
      }

    }, [filter])


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
      <LinearGradient
        colors={['#037298', '#004B65']}
        style={styles.background}
      >
        <FilterBar onHandleFilter={onHandleFilter}/>
        <List todos={todos} onHandleCompletedChange={onHandleCompletedChange} todosFilt={todosFilt} visibility={visibility} />
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
    borderRadius: 25,
  },
});