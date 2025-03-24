import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const SignupScreen = (props) => {

     const navigation = useNavigation();
     const route = useRoute();
     console.log(route)
    // const [data, setData] = useState(0);

    const { data, onClick } = route.params

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>SignupScreen</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data.name}</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data.email}</Text>

            <Button title={'Back'} onPress={() => { 
                navigation.goBack() 
                onClick({
                    data : 'something'
                })
                }} />
        </View>
    )

}

export default SignupScreen;