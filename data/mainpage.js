import React from 'react';
import { StyleSheet, Text, View,Button,Alert,Picker } from 'react-native';
import {createStackNavigator } from 'react-navigation';


export default class Page2 extends React.Component {
  render(){
    return (
      <View style={styles.Picker}>
      <Picker style={{ height: 200, width: 200, marginLeft:100, }}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
</Picker>
</View>

    );
  }
}
const styles = StyleSheet.create({
  Picker: {
    flex: 1,
    backgroundColor: '#fff',

}
});
