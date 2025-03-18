import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'


const MyFlatList = (props) => {
    const data = [
        { id: 1, name: "John Doe", age: 28, city: "New York" },
        { id: 2, name: "Jane Smith", age: 32, city: "Los Angeles" },
        { id: 3, name: "Michael Johnson", age: 24, city: "Chicago" },
        { id: 4, name: "Emily Davis", age: 29, city: "Houston" },
        { id: 5, name: "David Brown", age: 35, city: "San Francisco" }
    ];

    const listItem = [
        {
            title: 'INDIA',

            data: [
                { id: 1, name: 'Virat', role: 'batter' },
                { id: 2, name: 'Bumrah', role: 'boller' },
                { id: 3, name: 'Dhoni', role: 'Keeper' }]
        },
        {
            title: 'PAKISTAN', data: [{ id: 4, name: 'Jamman', role: 'batter' },
            { id: 5, name: 'Saheen', role: 'boller' },
            { id: 6, name: 'rizwan', role: 'Keeper' }]
        },
        { title: 'ENGLAND', data: [{ id: 7, name: 'root', role: 'batter' }, { id: 8, name: 'mark wood', role: 'boller' }, { id: 9, name: 'Butller', role: 'Keeper' }] },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>

            {/* <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.age}</Text>
                            <Text>{item.city}</Text>
                            <Button title='Submit' onPress={() => {console.log(item.id)}}/>
                        </View>
                    )
                }}
            /> */}
            <SectionList
                sections={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.age}</Text>
                            <Text>{item.city}</Text>
                            <Button title='Submit' onPress={() => { console.log(item.id) }} />
                        </View>
                    )
                }}
            />


        </View>
    )

}

export default MyFlatList;