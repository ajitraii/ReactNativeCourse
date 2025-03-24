import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, StatusBar } from 'react-native'


const LoginScreen = (props) => {
    const navigation = useNavigation()
    //navigate
    //goBack
    // push
    // Pop
    // replace
    const [data, setData] = useState({
        name: 'john',
        email: 'john@gmail'
    })

    const onClick = (data) => {
        console.log(data)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
            <StatusBar barStyle={'dark-content'} />
            <Text>LoginScreen</Text>
            {/* <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}


            <Button title={'SIGNUP'} onPress={() => {
                navigation.navigate('SignUp', {
                    data,
                    onClick: onClick
                })
            }} />
        </View>
    )

}

export default LoginScreen;