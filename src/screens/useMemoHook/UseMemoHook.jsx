
import React, { useEffect, useMemo, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const UseMemoHook = (props) => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    // const [calculatedValue, setCalculatedValue] = useState(0)

    // const expensiveHook = () => {
    //     console.log('expensive call- trigger')
    //     return x +23
    // }
    const onCalculateVal = (x) => {

        console.log('expensive call')
        return x + 30
    }

    const _calculateValue = useMemo(() => onCalculateVal(count1), [count1])


 

    // const calculatedVal = onCalculateValue(parseInt(count1))
   
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>UseMemoHook</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{count1}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{count2}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{_calculateValue}</Text>

            <Button title={'count1'} onPress={() => { setCount1(prev => prev + 1) }} />
            <Button title={'count1'} onPress={() => { setCount2(prev => prev + 1) }} />
            {/* <Button title={'Expensive call'} onPress={() => { onCalculateValue(count1) }} /> */}

        </View>
    )

}

export default UseMemoHook;