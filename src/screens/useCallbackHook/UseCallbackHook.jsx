import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const UseCallbackHook = (props) => {
    const [count, setCount] = useState(0)

    const exprensiveCall = () => {

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            {/* <Text>UseEffect Hook1</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}
           
        
            {/* <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} /> */}
        </View>
    )

}

export default UseCallbackHook;