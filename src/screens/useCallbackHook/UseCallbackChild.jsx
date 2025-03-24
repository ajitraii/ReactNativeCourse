
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const UseCallbackChild = React.memo((props) => {
    const { count1, exprensiveCall } = props
    // const [count2, setCount2] = useState(0)
    console.log('child re-render')
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>UseCallbackChild</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{count1}</Text>

            {/* <Button title={'Expensive call'} onPress={() => { exprensiveCall()}} /> */}

        </View>
    )

})

export default UseCallbackChild;