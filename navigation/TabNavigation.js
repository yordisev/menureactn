import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Profile from './Profile';
import Rutas from './Rutas';
import Detalle from '../screen/Detalle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tabbotton = createMaterialBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TabNavigation = () => {
    return (
        // <Tabbotton.Navigator initialRouteName="Inicio"
        //                 activeColor="#3393FF"
        //                 barStyle={{ backgroundColor: 'tomato' }}>
        //   <Tabbotton.Screen name="Inicio"
        //     component={Inicio}
        //     options={{
        //       tabBarLabel: 'Inicio',
        //       tabBarIcon: ({ color }) => (
        //         <MaterialCommunityIcons name="home" color={color} size={26} />
        //       ),
        //     }} />
        //   <Tabbotton.Screen name="Detalle"
        //     component={Detalle}
        //     options={{
        //       tabBarLabel: 'Detalle',
        //       tabBarIcon: ({ color }) => (
        //         <MaterialCommunityIcons name="bell" color={color} size={26} />
        //       ),
        //     }} />
        // </Tabbotton.Navigator>
        //     <TabTop.Navigator>
        //     <TabTop.Screen name="Inicio" component={Inicio} />
        //     <TabTop.Screen name="Detalle" component={Detalle} />
        //   </TabTop.Navigator>
        //     <Stack.Navigator>
        //     <Stack.Screen name="Inicio" component={Inicio} />
        //     <Stack.Screen name="Detalle" component={Detalle} />
        //   </Stack.Navigator>
        <Drawer.Navigator drawerContent={props => <Profile{...props} />}
            screenOptions={{ headerShown: true,
                            drawerActiveBackgroundColor:'#3393FF',
                            drawerActiveTintColor:'#fff',
                            drawerInactiveTintColor:'#333',
                             drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
                             drawerStyle: {
                                width: 300,
                                // marginTop:30
                              }, }}
            style={styles.container}>
            <Drawer.Screen name="Rutas" component={Rutas} options={{
                drawerIcon: ({ color }) => (
                    <AntDesign name="home" size={24} color={color} />
                )
            }} />
            <Drawer.Screen name="Detalle" component={Detalle} options={{
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="ondemand-video" size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default TabNavigation;