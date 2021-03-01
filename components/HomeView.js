import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchView from './SearchView';
import ItemView from "./ItemView";

const Stack = createStackNavigator();

const HomeView = () => {
    return (
      <Stack.Navigator style={{alignContent:"center"}}>
        <Stack.Screen name="Listed Items" component={ItemView} />
        <Stack.Screen name="Search" component={SearchView} options={{ title: 'Search for items' }} />
      </Stack.Navigator>
    )
  }//Homeview
  
  export default HomeView
