import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Child2 = (props) => {
    const { name, age, gender } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
            <Text>Child2</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{gender}</Text>
        </View>
    )

}

export default Child2;