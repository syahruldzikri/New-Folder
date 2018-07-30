import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, Picker } from 'react-native';
import * as firebase from 'firebase';

class Apps extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  _click = () => {
var database = firebase.database();
database.ref('user/').set({
  name:'aiman',

})
    //Alert.alert("Thank you", "Your information has been recorded");
  }

  render(){
    return(
      <View>
      <TextInput/>
      <Button title= "Sent Data" onPress = {this._click}/>
      </View>
    )
  }
}

export default Apps;
