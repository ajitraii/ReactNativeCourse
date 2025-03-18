import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Child2 from './Child2'

const Child1 = (props) => {
    const { name, age, gender } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

           

            <Child2 name={name} age={age} gender={gender}/>
        </View>
    )

}

export default Child1;