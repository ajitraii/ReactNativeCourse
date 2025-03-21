import React, { useEffect, useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, Alert } from 'react-native'


const UseRefHook = (props) => {
    const [data, setData] = React.useState(0)
    const [count1, setCount1] = React.useState(0)
    const [name, setName] = React.useState('')
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    console.log(inputRef)
    // useEffect(() => {
    //     setCount1(prev => prev + 1)
    // })
    const onChangeColor = (text) => {
        setName(text)
        if (text.length > 6) {
            // inputRef2.current.value ='dfghjfg'
            // inputRef2.current.style.backgroundColor ='lightblue'
            inputRef2.current.setNativeProps({
                style: { backgroundColor: "lightblue", borderRadius: 10 },
              });
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

            <Text>UseRef Hook</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{count1}</Text>
            <TextInput value={name} onChangeText={(txt) => { onChangeColor(txt) }} ref={inputRef} placeholder='User Name' style={{ margin: 10, width: '50%', borderWidth: 1, borderColor: "gray", padding: 10 }} />
            <TextInput ref={inputRef2} placeholder='Email' style={{ width: '50%', borderWidth: 1, borderColor: "gray", padding: 10 }} />
            
            {/* <Button title={'count 2'} onPress={() => {onChangeColor()}} />  */}
        </View>
    )

}

export default UseRefHook;