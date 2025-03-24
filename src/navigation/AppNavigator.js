import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import HomeScreen from '../screens/stackNavigator/HomeScreen';
import SignupScreen from '../screens/stackNavigator/SignupScreen';
import LoginScreen from '../screens/stackNavigator/LoginScreen';


const AppNavigator = (props) => {

    const Stack = createStackNavigator()
    return (
        //Main Parent for Navigators
        <NavigationContainer>
            {/* Parent for stack Navigators */}
            <Stack.Navigator>
                
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='SignUp' component={SignupScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>

            </Stack.Navigator>

        </NavigationContainer>

    )

}

export default AppNavigator;