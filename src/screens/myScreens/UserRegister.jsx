import { Formik } from 'formik'
import React, { useEffect, useState, useMemo } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import * as yup from 'yup';
import AppHeader from '../../components/AppHeader';
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import { BASE_URL } from './UserList';
import { useNavigation } from '@react-navigation/native';

const validationSchema = yup.object({
    username: yup.string().min(3, 'Name should be greater than 3').required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
});

const UserRegister = (props) => {

    const navigation = useNavigation()
    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [loading, setLoading] = useState(false)

    // DropDown States


    const [countryOpen, setCountryOpen] = useState(false);
    const [countries, setCountries] = useState([]);
    const [stateOpen, setStateOpen] = useState(false);
    const [states, setStates] = useState([]);
    const [cityOpen, setCityOpen] = useState(false);
    const [Cities, setCities] = useState([]);

    const apiKey = 'NzFxa3FNeUtwZ1Zud0pLVU92RzJRME9ENW8xcE1CcFpWRUVxbUI3cQ=='

    const fetchCountry = async () => {
        try {
            setLoading(true)
            const headers = new Headers();
            headers.append("X-CSCAPI-KEY", apiKey);
            const res = await fetch("https://api.countrystatecity.in/v1/countries", {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            });
            const response = await res.json()
            const modifiedData = response.map((item) => ({
                label: item.name,
                value: item.iso2
            }))
            console.log('modifiedData', modifiedData)
            setCountryList(modifiedData)
        } catch (error) {
            console.error('Fetch country error:', error);
        } finally {
            setLoading(false)
        }
    }

    const fetchState = async (iso2) => {
        try {
            setLoading(true)
            const headers = new Headers();
            headers.append("X-CSCAPI-KEY", apiKey);
            const res = await fetch(`https://api.countrystatecity.in/v1/countries/${iso2}/states`, {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            });
            const response = await res.json()
            const modifiedData = response.map((item) => ({
                label: item.name,
                value: item.iso2
            }))
            setStateList(modifiedData)
        } catch (error) {
            console.error('Fetch state error:', error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    let formInitialValues = {
        username: '',
        email: '',
        gender: '',
        country: '',
        state: ''
    };

    const onRegister = async (values) => {
        try {
            const payload = {
                ...values,
                id: Date.now()
            }
            setLoading(true)
            const headers = new Headers();
            // headers.append("X-CSCAPI-KEY", apiKey);
            headers.append("Accept", 'application/json');
            headers.append("Content-Type", 'application/json');
            const res = await fetch(`${BASE_URL}/data`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });
            const response = await res.json()
            console.log('Register res', response)
            Alert.alert('Success', "User Registered Successfully", [
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
                            country: '',
                            state: ''
                        };
                    }
                },
            ])
            // navigation.goBack()


        } catch (error) {
            console.error('Fetch country error:', error);
        } finally {
            setLoading(false)
        }
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <AppHeader title={'Add User'} showBackButton={false} />
            {loading && <ActivityIndicator size={'large'} style={{ flex: 1, justifyContent: 'center' }} />}
            <Formik
                initialValues={formInitialValues}
                validationSchema={validationSchema}
                enableReinitialize={false}
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
                            {countryList.length > 0 &&
                                <View style={{ zIndex: countryOpen ? 3000 : 1 }}>
                                    <DropDownPicker
                                        open={countryOpen}
                                        value={values.country}
                                        items={countryList}
                                        setOpen={setCountryOpen}
                                        setValue={(callback) => {

                                            const selectedValue = typeof callback === 'function' ? callback(values.country) : callback;
                                            const data = countryList.find((item) => item.value == selectedValue)
                                            console.log('selectedValue', data)

                                            setFieldValue('country', data.value);
                                            fetchState(selectedValue)
                                        }}
                                        setItems={setCountryList}
                                        placeholder="Country"
                                        searchable={true}
                                        searchPlaceholder="search..."
                                        searchTextInputStyle={{
                                            borderRadius: 5,
                                            fontSize: 16,
                                            color: '#333',
                                        }}
                                        searchContainerStyle={{
                                            borderBottomColor: 'gray',
                                            borderBottomWidth: .5,
                                        }}
                                        style={styles.dropdown}
                                    // dropDownContainerStyle={styles.dropdownContainer}
                                    />
                                </View>}
                            {stateList.length > 0 &&
                                <View style={{ zIndex: stateOpen ? 3000 : 1 }}>
                                    <DropDownPicker
                                        open={stateOpen}
                                        value={values.state}
                                        items={stateList}
                                        setOpen={setStateOpen}
                                        setValue={(callback) => {

                                            const selectedValue = typeof callback === 'function' ? callback(values.state) : callback;
                                            const data = stateList.find((item) => item.value == selectedValue)


                                            setFieldValue('state', data.value);
                                            //fetchState(selectedValue)
                                        }}
                                        setItems={setStateList}
                                        placeholder="State"
                                        searchable={true}
                                        searchPlaceholder="search..."
                                        searchTextInputStyle={{
                                            borderRadius: 5,
                                            fontSize: 16,
                                            color: '#333',
                                        }}
                                        searchContainerStyle={{
                                            borderBottomColor: 'gray',
                                            borderBottomWidth: .5,
                                        }}
                                        style={styles.dropdown}
                                    // dropDownContainerStyle={styles.dropdownContainer}
                                    />
                                </View>}




                            {/* <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={countryList}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select Country'}
                                searchPlaceholder="Search..."
                                value={values.country}
                                onChange={item => {
                                    setFieldValue('country', item.label)
                                    setFieldValue('state', '') // reset state when country changes
                                    fetchState(item.value)
                                }}
                            /> */}

                            {/* <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={stateList}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select State'}
                                searchPlaceholder="Search..."
                                value={values.state}
                                onChange={item => {
                                    setFieldValue('state', item.label)
                                }}
                            /> */}

                            <TouchableOpacity onPress={() => {
                                handleSubmit()

                            }} style={styles.btn}>
                                <Text style={{ alignSelf: 'center' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </Formik>
        </View>
    )
}

export default UserRegister;

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
