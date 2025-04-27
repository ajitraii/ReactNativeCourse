import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, TouchableOpacity, Image, Alert } from 'react-native'
import AppHeader from '../../components/AppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { deleteUser } from '../../redux/slice/UserSlice'

const ProfileScreen = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [data, setData] = useState(0);
    const userData = useSelector(state => state.users.userList)
    console.log(userData)
    const onDeleteUser = (id) => {
        dispatch(deleteUser(id))
        //Alert.alert('', 'User Deleted Successfully')
    }

    const renderUserItem = (props) => {
        const { item } = props;

        return (
            <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={{ height: 70, width: 70, }} source={require('../../assests/Images/profile.png')} />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.heading}>{item ? item?.username : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.email : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.gender : ''}</Text>
                
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <View style={styles.iconContainer}>
                        <Feather onPress={() => navigation.navigate('addUserData', { data: item, isEdit: true })} name="edit" size={25} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <AntDesign onPress={() => onDeleteUser(item.id)} name="delete" size={25} color="red" />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader title={'Users Data'} showBackButton={true} />
            <FlatList
                data={userData}
                keyExtractor={item => item.id}
                renderItem={renderUserItem}

            />
            <TouchableOpacity onPress={() => { navigation.navigate('addUserData', { data: [], isEdit: false }) }} style={styles.addbtn}>
                <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default ProfileScreen;
const styles = StyleSheet.create({
    addbtn: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'lightblue',
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