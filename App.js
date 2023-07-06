import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        component={Home}
        name= 'Home'
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

