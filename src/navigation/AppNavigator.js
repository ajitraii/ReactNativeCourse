import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import HomeScreen from '../screens/stackNavigator/HomeScreen';
import SignupScreen from '../screens/stackNavigator/SignupScreen';
import LoginScreen from '../screens/stackNavigator/LoginScreen';
import AuthStack from './AuthStack';


const AppNavigator = (props) => {

    
    return (
        //Main Parent for Navigators
        <NavigationContainer>
           <AuthStack />
          
        </NavigationContainer>

    )

}

export default AppNavigator;