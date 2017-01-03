{/*About us page*/}

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

class AboutUs extends Component {    
    render() {
     return(
        <View>
        <View style = {styles.container}>
            <Text style = {styles.header1}>
            Who them CEOs tho?
            </Text>
        </View>
        <View style = {styles.under}>
            <Image source={require('./Resources/rigby.png')} style={styles.image}/>
            <Text style = {styles.header2}>
            Alay D
            </Text>
            <Text style = {styles.description}>
            I am a real G
            </Text>
        </View>
        <View style = {styles.under}>
            <Image source={require('./Resources/mordecai.png')} style={styles.image}/>
            <Text style = {styles.header2}>
            Nidharshan R
            </Text>
            <Text style = {styles.description}>
            I am a real G
            </Text>
        </View>
        </View>
        
        )
    }
}
var styles = StyleSheet.create({
    description: {
        fontSize: 18,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#656565'
  },
    header1: {
        fontSize: 30,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#656565'
  },
    header2: {
        fontSize: 25,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#656565'
  },
    container: {
        padding: 10,
        marginTop: 65,
        alignItems: 'center'
  },
    under: {
        padding: 20,
        alignItems: 'center',
        alignSelf: 'stretch'
  },
    image: {
        width: 217,
        height: 138
  }
    
});

module.exports = AboutUs;