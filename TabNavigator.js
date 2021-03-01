import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './components/HomeView';
import NewItemView from './components/NewItemView';
import OwnListingView from './components/OwnListingView';
import ProfileView from './components/ProfileView';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen 
                        name="Profile" 
                        component={ProfileView} 
                        options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="body-outline" color={color} size={size} />)
                            }}
                    />
                    <Tab.Screen 
                        name="My List" 
                        component={OwnListingView} 
                        options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list-outline" color={color} size={size} />)
                        }}
                    />

                    <Tab.Screen 
                        name="Sell" 
                        component={NewItemView} 
                        options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add-circle-outline" color={color} size={size} />)
                        }}
                    />
                    <Tab.Screen 
                        name="Home" 
                        component={HomeView} 
                        options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" color={color} size={size} />)
                        }}
                    />                  
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}// class TabNavigator


