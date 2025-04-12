import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, StatusBar, ImageBackground } from 'react-native'


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
        <>
            <StatusBar barStyle={'dark-content'} />
            <View>
                <Text style={{fontSize:20, color:'blue'}}> Welcome To React Native</Text>
            </View>
            <ImageBackground resizeMode='contain' style={{ flex: 1, }} source={require('../../assests/Images/bacImg.jpg')}>




                {/* <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}



            </ImageBackground>
            <Button title={'Login'} onPress={() => {
                navigation.navigate('Home')
            }} />
        </>

    )

}

export default LoginScreen;