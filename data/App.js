import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker } from 'react-native';
import {createStackNavigator, createDrawerNavigator } from 'react-navigation';
import gambau from './logweb2.png';
import Haa from './haha.js';
import Hehe from './mainpage.js';
import Haha from './page.js';
import DropdownMenu from 'react-native-dropdown-menu';

class App extends React.Component {
_click=()=> {
  Alert.alert("Hospital Sultan Ismail", "No contact: 07-3565000")


}
  render() {
    return (

      <View style={styles.container}>
      <View style={styles.container2}>
      <Image style={{width:100, height:100}} source={gambau}/>
        <Text>Hospital Sultan Ismail</Text>
        <Text>Johor Bahru</Text>
        <Text style={{marginBottom:20}}>Live view </Text>
        <Haa/>
        <Button title = "Check No Counter" onPress= {() => this.props.navigation.navigate('1')}/>
        <Button title = "  Vision & Mission   " onPress= {() => this.props.navigation.navigate('2')}/>
        <Button title = "       Contact No       " onPress = {this._click}/>




        </View>
      </View>

    );
  }
}
export default createDrawerNavigator({
  Home : {screen : App},
  One : {screen : Haha},
  Two : {screen : Hehe},
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingBottom:50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  container2:{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:70,
    paddingBottom:70,
    flexDirection:'column'
  } ,
  try:{
    display: 'flex',
  },
});
