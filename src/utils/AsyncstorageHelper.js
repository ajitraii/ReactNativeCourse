import AsyncStorage from "@react-native-async-storage/async-storage"

export const USERID = 'userId'

export const saveUserId = async (userId) => {
   
    return await AsyncStorage.setItem(USERID, `${userId}` ? userId : '')
}
export const getUserId = async() => {
    return await AsyncStorage.getItem(USERID)
}