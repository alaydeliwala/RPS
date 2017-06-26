{/*About us page*/}

'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  ScrollView,
  Text
} from 'react-native'

class AboutUs extends Component {
    render() {
     return(
        <View style = {styles.container}>
        <View style = {styles.under}>
            <Text style = {styles.header1}>
            Alay D
            </Text>
            <Text style = {styles.description}>
            A freshman at NC State University pursuing a computer science major, Alay is involved in groundbreaking research in self-learning AI and computer-machine integration. He made this app in his free time.
            </Text>
        </View>
        <View style = {styles.under1}>
            <Text style = {styles.header1}>
            Nidharshan R
            </Text>
            <Text style = {styles.description}>
            A freshman, pursuing a degree in economics at Cornell Univeristy. Orginally a python developer, He swtiched to javascript to make this awesome app with his bestfriend.
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
        color: '#ECF0F1',
        padding: 25
  },
    header1: {
        fontSize: 30,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#ECF0F1'
  },
    container: {
        flex: 1,
        alignItems: 'center'
  },
    under: {
        marginTop: 60,
        padding: 20,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#2ECC71',
        flexDirection: 'column',
        flex: 1
  },
    under1: {
        padding: 20,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#3498DB',
        flexDirection: 'column',
        flex: 1
  }

});

module.exports = AboutUs;
