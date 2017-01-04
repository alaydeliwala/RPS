'use strict';
import React, {Component} from 'react'
import {
  StyleSheet,
  AppRegistry,
  Button,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  NavigatorIOS
} from 'react-native';

class WelcomePage extends Component {
  constructor(props){
  super(props);
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonAlignment}>
          <TouchableHighlight
            style = {styles.button}
            underlayColor = '#99d9f4'
          >
            <Text style = {styles.buttonText}>
              Start Game
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style = {styles.button}
            underlayColor = '#99d9f4'
          >
            <Text style = {styles.buttonText}>
              How To Play
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style = {styles.button}
            underlayColor = '#99d9f4'
          >
            <Text style = {styles.buttonText}>
              About Us
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "white",
    margin: 20,
    marginBottom: 0,
    height: 35,
    backgroundColor: 'lightblue',
    width: 1000,
  },

  button: {
    width: 100,
    height: 26,
    backgroundColor: 'lightblue',
    margin: 10,
    padding:7,
    borderRadius: 10,
  },

  buttonAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 12,
  }
});


module.exports = WelcomePage;
