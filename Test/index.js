import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker,Tab } from 'react-native';
import {createStackNavigator, createDrawerNavigator,createTabNavigator } from 'react-navigation';

class App extends React.Component {

  _next = () => {
    this.props.navigation.navigate('Pagenext');

  }

  render() {
    return(
      <View style={styles.container}>
        <Text>This Page contains all the functions</Text>
        <Button title="Firebase Read" onPress={this._next}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createStackNavigator(
  {
    Home: {screen: App},
    Pagenext: {screen: FirebaseRead},

  }
);
