import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/stackNavigator/HomeScreen";
import ProfileScreen from "../screens/stackNavigator/ProfileScreen";
import CustomDrawer from "../components/CustomDrawer";
import AppBottomTabs from "./AppBottomTabs";
import AddUserData from "../screens/stackNavigator/AddUserData";




const Drawer = createDrawerNavigator()
const AppDrawer = (props) => {


    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: "pink"
        }} drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='Home' component={AppBottomTabs} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
            <Drawer.Screen name='addUserData' component={AddUserData} />

        </Drawer.Navigator>

    )

}

export default AppDrawer;