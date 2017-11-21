/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import Header from "./header";
import AlbumList from "./albumList";

export default class Home extends Component<{}> {

 onClick(){
  // ToastAndroid.showWithGravityAndOffset(this.props.name, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 80);
  // ToastAndroid.show('Clicked!..', ToastAndroid.SHORT);
}
//<Text>{this.props.navigation.state.params.name}</Text>
  render() {
    return (
      <View>
      <Header headerText={'PRiya'}/>

      <AlbumList />
      </View>
      
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
});
