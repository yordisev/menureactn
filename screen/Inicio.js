import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>inicio</Text>
      <Button title="navegar" onPress={() => navigation.navigate('Detalle', { idbuscar: 1 })}/>
      <Button title="Atras" onPress={() => navigation.goBack()}/>
      <Button title="Abrir Menu" onPress={() => navigation.openDrawer()}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    justifyContent: 'center',
    },
  });
export default Inicio