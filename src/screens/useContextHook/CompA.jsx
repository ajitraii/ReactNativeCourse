import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildB from './CompB';


const ChildA = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            <Text>CHILDA</Text>
            {/* <Text style={{ color: 'black', fontSize: 30 }}>{data}</Text> */}
           
        
           <ChildB />
            {/* <Button title={'count 2'} onPress={() => { setCount2(prev => prev + 1) }} /> */}
        </View>
    )

}

export default ChildA;