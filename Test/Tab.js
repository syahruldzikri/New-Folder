import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker } from 'react-native';
import {createTabNavigator} from 'react-navigation';
import FirebaseRead from './index.js';

 class App extends React.Component {

// _tab = () => {
//   this.props.navigation.navigate('Tab2');
//
// }


render() {
  return(
    <View style={styles.container}>
      <Text>Hello World </Text>

    </View>
    )
  }
}

export default createTabNavigator(
   {
   Tab1 : {screen : App},
   Tab2 : {screen :FirebaseRead},


 });

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     paddingTop:200,
     paddingBottom:200,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
