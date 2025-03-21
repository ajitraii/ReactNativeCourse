import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildA from './CompA'


const UseContextHook = (props) => {
    const [data, setData] = useState({
        name : 'Ajit',
        email:'ajitrai@gmail.com'
    })

    const updateUserData = (data) => {
        setData(data)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent:'center', alignItems:'center' }}>

            <Text>UseContext Hook</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data.name}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data.email}</Text>
           
        
            {/* <Button title={'UPDATE'} onPress={() => {updateUserData({name : 'swarna', email:'swarna@gmail.com'}) }} /> */}

            <ChildA />
        </View>
    )

}

export default UseContextHook;