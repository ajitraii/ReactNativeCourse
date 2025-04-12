import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreen from '../screens/stackNavigator/LoginScreen';
import SignupScreen from '../screens/stackNavigator/SignupScreen';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator()
const AuthStack = () => {


    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>

            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignupScreen} />
            <Stack.Screen name='Home' component={AppDrawer} />

        </Stack.Navigator>
    )

}

export default AuthStack;