import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildD from './CompD'
import { UserContext } from './UseContextHook';


const ChildC = (props) => {
    const [data, updateUserData] = useContext(UserContext);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
            <Text>CHILDC</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>CHILD c : {data.name}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>CHILD c: {data.email}</Text>

           
            <Button title={'Update C'} onPress={() => {
                updateUserData({
                    name: 'swarna',
                    email: 'swarna@gmail.com'
                })
            }} />
             <ChildD />
        </View>
    )

}

export default ChildC;