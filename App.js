import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View, Header, Icon, Left, Right, Body, Title } from 'native-base';
import HomeScreen from './screens/HomeScreen';  
import ProfileScreen from './screens/ProfileScreen';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile Screen' }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
