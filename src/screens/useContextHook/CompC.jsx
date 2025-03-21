import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildD from './CompD'


const ChildC = (props) => {
    const [data, setData] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
 <Text>CHILDC</Text>
            {/* <Text>UseEffect Hook1</Text>
            <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}

            <ChildD />
            {/* <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} /> */}
        </View>
    )

}

export default ChildC;