import React from 'react';
import { StyleSheet, Text, View,Button,Alert,Picker } from 'react-native';
import {createStackNavigator } from 'react-navigation';


export default class Page2 extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:30}}>
      Vision</Text>
      <Text>To become a centre Of excellent</Text>
      <Text>In health service and In providing human excellent guide</Text>


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
