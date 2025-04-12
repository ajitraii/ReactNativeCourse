import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, Alert, Image } from 'react-native'
import AppHeader from '../../components/AppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIsFocused } from '@react-navigation/native';



export const BASE_URL = 'http://10.0.2.2:3000'
const UserList = (props) => {
    const isFocused = useIsFocused()
    const [userData, setUserData] = useState([]);

    const fetchUser = async () => {
        try {
            const res = await fetch(`${BASE_URL}/data`, {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                    // 'Authorization' : 'token'
                }
                // follow:""
            })
            const data = await res.json();
            const reversedData = data.reverse()
            setUserData(reversedData)
            // if (data && data.status == 'OK' && data.data.length > 0) {
            //     setUserData(data)
            // } else {

            // }
            console.log('fetchuser Data###', data)
        } catch (error) {
            Alert.alert('Error', error)
        }

    }

    useEffect(() => {
        fetchUser()
    }, [isFocused])

    const renderUserItem = (props) => {
        const { item } = props;

        return (
            <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={{ height: 70, width: 70, }} source={require('../../assests/Images/profile.png')} />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.heading}>{item ? item?.name : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.email : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.gender : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.country : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.state : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.city : ''}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={styles.iconContainer}>
                        <Feather onPress={() => navigation.navigate('AddUser', { data: item, isEdit: true })} name="edit" size={30} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign onPress={() => onDeleteUser(item.id)} name="delete" size={30} color="black" />
                    </View>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader title={'Users'} showBackButton={true} />
            <View style={{}}>
                <FlatList
                    data={userData}
                    keyExtractor={item => item.id}
                    renderItem={renderUserItem}

                />

            </View>




            {/* <TouchableOpacity onPress={() => { navigation.navigate('AddUser', { data: [], isEdit: false }) }} style={styles.add}>
                <View style={styles.iconContainer}>
                    <Feather name="plus-circle" size={30} color="white" />
                </View>
            </TouchableOpacity> */}
        </SafeAreaView>
    )

}

export default UserList;

const styles = StyleSheet.create({
    add: {
        position: 'absolute',
        bottom: 100,
        right: 30,
        backgroundColor: 'lightblue',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 16,
        color: 'gray'
    }

})