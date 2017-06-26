{/*How to Play page*/}

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

class HowToPlay extends Component {
    render() {
     return(
        <ScrollView>
            <View backgroundColor = '#9B59B6'>
              <Text style = {styles.header}>
              Choose one of the following weapons, and the mysterious genie inside your phone will choose as well...either beating you or getting beat! Choose carefully...
              </Text>
            </View>
            <View style = {styles.weapons}>
              <Text style = {styles.header2}>
              Weapons
              </Text>
              <View style = {styles.flowRight}>
                <Image source={require('./Resources/rock.png')} style={styles.image}/>
                <Text style = {styles.description}>
                Rock break Scissors!
                </Text>
              </View>
              <View style = {styles.flowRight}>
                <Image source={require('./Resources/paper.png')} style={styles.image}/>
                <Text style = {styles.description}>
                Paper covers Rock!
                </Text>
              </View>
              <View style = {styles.flowRight}>
                <Image source={require('./Resources/scissors.png')} style={styles.image}/>
                <Text style = {styles.description}>
                Scissors shred Paper!
                </Text>
              </View>
             </View>
            <View style = {styles.modes}>
              <Text style = {styles.header2}>
              Modes
              </Text>
              <Text style = {styles.header}>
              Original mode: Best out of five
              </Text>
              <Text style = {styles.header}>
              Survival mode: Coming Soon!!!!! {/*Keep playing until the genie beats you!*/}
              </Text>
            </View>
        </ScrollView>
     )}}

var styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#ECF0F1',
        padding: 20
  },
    header2: {
        fontSize: 30,
        fontFamily: 'avenir',
        textAlign: 'center',
        color: '#ECF0F1'
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
        color: '#ECF0F1',
        flex: 3
  },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 10
  },
  image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 20
  },
  weapons: {
    backgroundColor: '#1ABC9C',
    padding: 30
  },
  modes: {
    backgroundColor: '#9B59B6',
    padding: 30
  }
});

module.exports = HowToPlay;
