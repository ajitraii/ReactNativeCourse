
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserList from "../screens/myScreens/UserList";
import UserDashboard from "../screens/myScreens/Dashboard";
import UserRegister from "../screens/myScreens/UserRegister";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Bottom = createBottomTabNavigator()
const AppBottomTabs = (props) => {


    return (
        <Bottom.Navigator screenOptions={{ headerShown: false }}>
            <Bottom.Screen name='UserList' component={UserList} options={{
                tabBarIcon: () => {
                    return (
                        <AntDesign name="user" size={22} color="black" />
                    )
                }
            }} />
            <Bottom.Screen name='Dashboard' component={UserDashboard} options={{
                tabBarIcon: () => {
                    return (
                        <AntDesign name="dashboard" size={22} color="black" />
                    )
                }
            }} />
            <Bottom.Screen name='UserRegister' component={UserRegister}
                initialParams={{ isEdit: false, data: [] }} options={{
                    tabBarIcon: () => {
                        return (
                            <AntDesign name="adduser" size={22} color="black" />
                        )
                    },

                }} />

        </Bottom.Navigator>

    )

}

export default AppBottomTabs;