import 'react-native-gesture-handler';
import Inicio from '../screen/Inicio';
import Detalle from '../screen/Detalle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tabbotton = createMaterialBottomTabNavigator();

const Rutas = () => {
  return (
    <Tabbotton.Navigator initialRouteName="Inicio"
                    activeColor="#e91e63"
                    barStyle={{ backgroundColor: 'tomato' }}>
      <Tabbotton.Screen name="Inicio"
        component={Inicio}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tabbotton.Screen name="Detalle"
        component={Detalle}
        options={{
          tabBarLabel: 'Detalle',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} />
    </Tabbotton.Navigator>
  );
}

export default Rutas;