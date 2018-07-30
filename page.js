import React from 'react';
import { StyleSheet, Text, View,Button,Image,Alert,Picker } from 'react-native';
import {createStackNavigator } from 'react-navigation';
import jing from './maintenance.jpg';


export default class Page2 extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:30}}>
      Sorry</Text>
      <Image style={{width:250,height:250}} source={jing}/>


</View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:100,
    paddingBottom:100,
    alignItems: 'center',
    justifyContent: 'center',


}
});
