import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const UseEffectHook = (props) => {
    const [data, setData] = React.useState(0)
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    //  1. Mounting phase
    // 2.Updating phase
    // 3.unMounting phase

    //useEffect(<function>, <dependencies>) --> syntax

    // useEffect(() => {})  mounting

    // useEffect(() => {}, []) updating

    // useEffect(() => {



    // return () => {

    // } cleanUp function
    // }, [])  unmounting

    // useEffect(() => {
    //     console.log('render every time');
    //    // setData(prev=> prev+1)
    // })


    // useEffect(() => {
    //     console.log('render only one time')
    // // onApiLoad()
    //   //Update 
    // }, [count2]) 

    // useEffect(() => {
    //     console.log('render only one time')
    //     let timer = setInterval(() => {
    //         setCount1(prev => prev + 1)
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])
    // useEffect(() => {
    //     console.log('render every time')
    //     return () => {S

    //     }
    // }, [])




    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>UseEffect Hook1</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>count 1 : {count1}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>count 2 : {count2}</Text>
            {/* <Button title={'Update'} onPress={() => {setData(prev=> prev+1)}}/> */}
            <Button title={'count 1'} onPress={() => { setCount1(prev => prev + 1) }} />
            <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} />
        </View>
    )

}

export default UseEffectHook;