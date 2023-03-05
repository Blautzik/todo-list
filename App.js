import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import { useFonts } from 'expo-font';
import AddItem from './components/AddItem';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import { data } from './asyncmock';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();

export default function App() {

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
