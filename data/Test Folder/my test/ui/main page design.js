class UIDesign extends React.Component {
  render() {
    return (
      <View style={styles.container2}>
        <Text>MAIN PAGE</Text> ///main page design for top
        <View style={styles.container3}>
          <Text>Search</Text> ///for google map search
      </View>
    )
  }
}



///another type of page UIDesign
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});
