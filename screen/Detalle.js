import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const Detalle = () => {
    
  const toggleAlert = () => {
     Dialog.show({
          type: ALERT_TYPE.SUCCESS, //DANGER,WARNING
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'close',
        })
    //   Toast.show({
    //     type: ALERT_TYPE.SUCCESS,
    //     title: 'Verificar',
    //     textBody: 'Los Campos no Pueden estar vacios',
    //   })
    }
  return (
        <AlertNotificationRoot>
    <View style={styles.container}>
        <TouchableOpacity onPress={toggleAlert}>
        <Text>Tap me</Text>
      </TouchableOpacity>
      
      <Text>Detalle</Text>
    </View>
  </AlertNotificationRoot>
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
export default Detalle