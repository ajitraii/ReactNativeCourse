import React, { useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import UseCallbackChild from './UseCallbackChild'


const UseCallbackHook = (props) => {
    const [count1, setCount1] = useState(0)
    const [count3, setCount3] = useState(0)

    //    useCallback(() => {}, []) //syntax


    // const exprensiveCall = () => { //initially
    //     console.log('exprensiveCall re-render')
    // }


    // IN-Parent Component

    // const exprensiveCall = useCallback(() => {
    //     console.log('exprensiveCall re-render')
    // }, [])

    // useEffect(() => {
    //     exprensiveCall()
    // }, [exprensiveCall])

    //   using function 
    const exprensiveCall = useCallback(() => { //initially
        console.log('exprensiveCall re-render')
    }, [])
    // const exprensiveCall = () => { //initially
    //     console.log('exprensiveCall re-render')
    // }


    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>UseCallbackHook Hook</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{count1}</Text>


            <Button title={'count 1'} onPress={() => { setCount1(prev => prev + 1) }} />
            <Button title={'count 3'} onPress={() => { setCount3(prev => prev + 1) }} />



            <UseCallbackChild count1={count1}  exprensiveCall={exprensiveCall}/>

        </View>
    )

}

export default UseCallbackHook;