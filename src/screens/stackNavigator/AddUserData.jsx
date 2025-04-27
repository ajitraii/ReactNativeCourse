import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList, TouchableOpacity, Alert } from 'react-native'
import AppHeader from '../../components/AppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as yup from 'yup';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/slice/UserSlice';
import { useNavigation, useRoute } from '@react-navigation/native';



const validationSchema = yup.object({
    username: yup.string().min(3, 'Name should be greater than 3').required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
});

const AddUserData = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const route = useRoute();
    const {data, isEdit} = route.params

    let formInitialValues = {
        username: isEdit ? data.username :'',
        email: isEdit ? data.email :'',
        gender: isEdit ? data.gender :'',

    };
    const successMsg = (succData) => {
        Alert.alert('Success', succData, [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    navigation.goBack()
                    formInitialValues = {
                        username: '',
                        email: '',
                        gender: '',
                    };
                }
            },
        ])
    }

    const onRegister = (values) => {
        navigation.goBack()
        return
        let _values = {
            ...values,
            id: isEdit ? data.id : Date.now()
        }
        if(isEdit){
            dispatch(updateUser({id : _values.id, data : _values}))
           // successMsg('User Updated Successfully')
        }else{
            dispatch(addUser(_values))
            //successMsg('User Registered Successfully')
        }
       
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader title={'Add Users'}  />
            <Formik
                initialValues={formInitialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(values) => {
                    onRegister(values);
                }}>
                {({ values, setFieldValue, handleSubmit, errors, resetForm }) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                                value={values.username}
                                onChangeText={txt => setFieldValue('username', txt)}
                            />
                            {errors.username && <Text style={styles.error}>{errors.username}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                value={values.email}
                                onChangeText={txt => setFieldValue('email', txt)}
                            />
                            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                            <RadioButton.Group onValueChange={value => setFieldValue('gender', value)} value={values.gender}>
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                                    <RadioButton.Item label="Male" value="male" color='green' />
                                    <RadioButton.Item label="Female" value="female" />
                                    <RadioButton.Item label="Other" value="other" />
                                </View>
                            </RadioButton.Group>


                            <TouchableOpacity onPress={() => {
                               // handleSubmit()
                               navigation.goBack()
                            }} style={styles.btn}>
                                <Text style={{ alignSelf: 'center' }}>{'SUBMIT'}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </Formik>
        </SafeAreaView>
    )

}

export default AddUserData;
const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 10,
        width: '90%'
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    error: { color: 'red', fontSize: 18, marginLeft: 20 },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: '90%',
        marginTop: 10
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    }
});