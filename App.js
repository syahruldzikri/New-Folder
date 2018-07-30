import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker } from 'react-native';
import {createStackNavigator, createDrawerNavigator } from 'react-navigation';
import gambaa from './logweb2.jpg';
import Hahaha from './haha.js'
import Pegipage from './page.js'
import Lol from './mainpage.js'

 class App extends React.Component {

_click = () => {
  Alert.alert("Hotline Hospital Sultan Ismail", "No contact: 07-3565000");
}

  render() {
    return (
      <View style={styles.container}>
      <Image style={{width:150,height:150}} source={gambaa}/>
      <Text style={{fontWeight:'bold',fontSize:25}}>
       Hospital Sultan Ismail</Text>
       <Text style={{fontWeight:'bold',fontSize:25}}>
        Johor Bahru</Text>
      <Text style={{marginBottom:30}}>Live view </Text>
      <Hahaha/>

        <Button title = "Check No Counter" onPress= {() => this.props.navigation.navigate('Counter')}/>
        <Button title = "           Vision           " onPress= {() => this.props.navigation.navigate('Vision')}/>
        <Button title = "       Contact No     " onPress = {this._click}/>
        <Text style={{fontWeight:'bold',fontSize:15}}>
        Slide from left to right menu </Text>


      </View>
    );
  }
}



- import { DrawerNavigator } from 'react-navigation';
+ import { DrawerNavigator, DrawerItems } from 'react-navigation';

const App = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
-}
+}, {
+  contentComponent: (props) => (
+    <View>
+      <Text>Custom Header</Text>
+      <DrawerItems {...props} />
+      <Text>Custom Footer</Text>
+    </View>
+  )
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:200,
    paddingBottom:200,
    alignItems: 'center',
    justifyContent: 'center',
    //flexWrap: 'wrap'
  },
});
