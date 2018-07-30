import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker,Tab } from 'react-native';
import {createStackNavigator, createDrawerNavigator,createTabNavigator } from 'react-navigation';
=======
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker } from 'react-native';
import {createStackNavigator, createDrawerNavigator } from 'react-navigation';
import firebasereader from './firebaseRead.js'
>>>>>>> ace651b76c009ca96eaa7b5c8270383fd7068f36

class App extends React.Component {

  _next = () => {
    this.props.navigation.navigate('Pagenext');

  }
  _UIUX = () => {
    this.props.navigation.navigate('PageUI');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>This Page contains all the functions</Text>
        <Button title="Firebase Read" onPress={this._next}/>
        <Button title="UI/UX" onPress={this._UIUX}/>
      </View>
    )
  }
}

class FirebaseRead extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the firebase functions</Text>
      </View>
    )
  }
}

class UIDesign extends React.Component {
  render() {
    return (
      <View style={styles.container2}>
        <Text>This is the UI/UX design</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    borderColor: 'black',
    height: 40,
    borderWidth: 3,
  },
});


export default createStackNavigator(
  {
    Home: {screen: App},
<<<<<<< HEAD
    Pagenext: {screen: FirebaseRead},

=======
    Pagenext: {screen: firebasereader},
    PageUI: {screen: UIDesign},
  },
  {
    headerMode: null,
>>>>>>> ace651b76c009ca96eaa7b5c8270383fd7068f36
  }
);
