import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/UserSlice';
import productReducer from './slice/OnlineUserSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";


const rootReducer = combineReducers({
    users: userReducer,
    products : productReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const Store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: true })
})

const persistedStore = persistStore(Store)

export { persistedStore, Store }