<<<<<<< HEAD
import React, { Component } from 'react';

import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Table from './splash.js'
export default class Myapp extends Component<{}>
{

  constructor(){

    super();

    this.state={

      isVisible : true,

    }

  }

  Hide_Splash_Screen=()=>{

    this.setState({
      isVisible : false

    });

  }

  componentDidMount(){

    var that = this;

    setTimeout(function(){

      that.Hide_Splash_Screen();

    }, 5000);


=======
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Textinput, Picker } from 'react-native';
import {createStackNavigator, createDrawerNavigator } from 'react-navigation';
import gambaa from './logweb2.jpg';
import Hahaha from './haha.js'
import Pegipage from './page.js'
import Lol from './mainpage.js'

import Test from './Test/index.js';

 class App extends React.Component {

_click = () => {
  Alert.alert("Hotline Hospital Sultan Ismail", "No contact: 07-3565000");
}
>>>>>>> f2eb8aec7e980251673cb615a41946861cce9eab

  }

    render()
    {
        let Splash_Screen = (

            <View style={styles.SplashScreen_RootView}>

                <View style={styles.SplashScreen_ChildView}>

                    {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                    <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/welcome.png'}}
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />

                </View>


                <TouchableOpacity
                  activeOpacity = { 0.5 }
                  style={styles.TouchableOpacity_Style}
                  onPress={this.Hide_Splash_Screen} >

                    <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
                    style={{width:25, height:25}} />

                </TouchableOpacity>


            </View> )


            <Table/>

            </View>

        );
    }
}

const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',

<<<<<<< HEAD
    },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex:1,
        margin: 20,
    },

    TouchableOpacity_Style:{

        width:25,
        height: 25,
        top:9,
        right:9,
        position: 'absolute'
=======
export default createDrawerNavigator({
  Home : {screen : App},
  Counter : {screen : Pegipage},
  Vision : {screen : Lol},
  Test : {screen : Test},
});
>>>>>>> f2eb8aec7e980251673cb615a41946861cce9eab

    }
});
