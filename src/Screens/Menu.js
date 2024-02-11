import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "react-native-paper";
import {ImageBackground,StyleSheet} from 'react-native';

import Principal from './Principal';
import Dispositivos from './Dispositivos';
const Tab = createMaterialBottomTabNavigator();


const Menu = () => {
   return (
     <Tab.Navigator
       tabBarActiveBackgroundColor='#000'
       activatedColor= '#000'
       inactiveColor='#95a5a6'
       barStyle={styles.navigationBar}
       >
            <Tab.Screen
                name="Principal"
                component={Principal}
                options={{
                    tabBarLabel: 'Principal',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color='#000' size={26} />
                    )
                }}
            />

        <Tab.Screen
                name="Dispositivos"
                component={Dispositivos}
                options={{
                    tabBarLabel: 'Dispositivos',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="devices" color='#000' size={26} />
                    )
                }}
            />

        </Tab.Navigator>
   )
}
const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: '#fff',
    }
})

export default Menu;