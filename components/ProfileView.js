import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './Profile';
import LogIn from "./LogIn";

const Stack = createStackNavigator();

const HomeView = () => {
    return (
      <Stack.Navigator style={{alignContent:"center"}}>
        <Stack.Screen name="LogIn" options={{headerShown:false}} component={LogIn} />
        <Stack.Screen name="Search" options={{headerShown:false}}component={Profile} />
      </Stack.Navigator>
    )
  }//Homeview
  
  export default HomeView