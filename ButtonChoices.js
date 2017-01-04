{/*Buttons for choosing play*/}

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

class ButtonChoices extends Component {
    render() {
        return(
            
        <View style = {styles.container}>
            <Text style = {styles.description}>
            alay loves dick
            </Text>
        <View style = {styles.flowRight}>
            <TouchableHighlight
                style={styles.button}
                underlayColor='#99d9f4'>
                <Image source={require('./Resources/mordecai.png')} style={styles.image}/>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                underlayColor='#99d9f4'>
                <Image source={require('./Resources/rigby.png')} style={styles.image}/>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                underlayColor='#99d9f4'>
                <Image source={require('./Resources/mordecai.png')} style={styles.image}/>
            </TouchableHighlight>
        </View>
        </View>
)}
}

var styles = StyleSheet.create({
  flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 300
  },
  button: {
        height: 100,
        width: 80,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: .1,
        borderRadius: 50,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  image: {
        width: 100,
        height: 100,
        borderRadius: 50
  }});

  module.exports = ButtonChoices;