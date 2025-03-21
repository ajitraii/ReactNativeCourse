import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildC from './CompC'


const ChildB = (props) => {
    const [data, setData] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
 <Text>CHILDB</Text>
            {/* <Text>UseEffect Hook1</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}
           
        <ChildC />
            {/* <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} /> */}
        </View>
    )

}

export default ChildB;