import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import AppHeader from '../../components/AppHeader'


const HomeScreen = (props) => {
    const [data, setData] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <AppHeader title={'HOME'}/>
            <Text>HomeScreen</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text>


            <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} />
        </View>
    )

}

export default HomeScreen;