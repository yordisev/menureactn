import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IniciarLogin from './IniciarLogin';
import Login from './Login';
import Registrarse from './Registrarse';

const Stack = createStackNavigator();

const RutaPrincipal = ({navigation}) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="IniciarLogin" component={IniciarLogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registrarse" component={Registrarse} />
          </Stack.Navigator>
       
    );
}
export default RutaPrincipal;