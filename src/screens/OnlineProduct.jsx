import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../components/AppHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/slice/OnlineUserSlice'
import { getUserId, saveUserId } from '../utils/AsyncstorageHelper'


const OnlineProduct = (props) => {
    const [products, setProducts] = useState([]);
    const data = useSelector(state => state.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
       
        saveUserData()
    }, [])


    const saveUserData = async() => {
         let userId = '1234'
       await saveUserId(userId);
      
    }
    // console.log(data)



    const renderUserItem = (props) => {
        const { item } = props;

        return (
            <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={{ height: 70, width: 70, }} source={{ uri: item ? item?.image : ''}} />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.heading}>{item ? item?.title
                            : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.description : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.price : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.category : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.rating?.count : ''}</Text>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView>
            <AppHeader title={'Products'} />
            <FlatList
                data={data?.product}
                keyExtractor={item => item.id}
                renderItem={renderUserItem}

            />

        </SafeAreaView>
    )

}

export default OnlineProduct;
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