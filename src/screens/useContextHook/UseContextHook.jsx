import React, { createContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildA from './CompA'

export const UserContext = createContext() // initialize
const UseContextHook = (props) => {
    const [data, setData] = useState({
        name: 'Ajit',
        email: 'ajitrai@gmail.com'
    })
    //const [state, setState] = useState('name')

    const updateUserData = (data) => {
        setData(data)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

            <Text>UseContext Hook</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>Parent : {data.name}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>Parent: {data.email}</Text>


            {/* <Button title={'UPDATE'} onPress={() => {updateUserData({name : 'swarna', email:'swarna@gmail.com'}) }} /> */}
            <UserContext.Provider value={[data, updateUserData]}>
                <ChildA />
            </UserContext.Provider>

        </View>
    )

}

export default UseContextHook;