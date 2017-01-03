{/*How to Play page*/}

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native'

class HowToPlay extends Component {    
    render() {
     return(
        <View style = {styles.container}>
            <Text style = {styles.header1}>
            How do you play this damn game?
            </Text>
            <Text style = {styles.description}>
            I am a real G
            </Text>
        </View>
     )}}

var styles = StyleSheet.create({
    header1: {
        fontSize: 30,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#656565'
  },
    container: {
        padding: 10,
        marginTop: 65,
        alignItems: 'center'
  },
    description: {
        fontSize: 18,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#656565'
  },
    under: {
        padding: 20,
        alignItems: 'center',
        alignSelf: 'stretch'
  }
});

module.exports = HowToPlay;