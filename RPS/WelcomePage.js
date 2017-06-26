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
var HowToPlay = require ('./HowToPlay');
var AboutUs = require ('./AboutUs');
var TheGame = require ('./TheGame');

class WelcomePage extends Component {
  constructor(props){
  super(props);
    this.state = {
    }
  }

  onAboutUsPressed() {
    this.props.navigator.push({
      title: 'About Us',
      component: AboutUs,
    });
  }

  onHowToPlayPressed() {
    this.props.navigator.push({
      title: 'How To Play',
      component: HowToPlay,
    });
  }

  onTheGamePressed() {
    this.props.navigator.push({
      title: 'Rock Paper Scissors',
      component: TheGame,
      leftButtonTitle: 'Home',
      onLeftButtonPress: () => this.props.navigator.pop()
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Text style = {styles.header}>
                Welcome To RPS
            </Text>
        </View>
        <View style = {styles.creators}>
            <Text style = {styles.names}>
                By Alay D. & Nidharshan R.
            </Text>
        </View>
        <View style = {styles.flowRight}>
            <Image source={require('./Resources/rock.png')} style={styles.image}/>
            <Image source={require('./Resources/paper.png')} style={styles.image}/>
            <Image source={require('./Resources/scissors.png')} style={styles.image}/>
        </View>
        <View style={styles.buttonAlignment}>
          <TouchableHighlight
            style = {styles.button1}
            underlayColor = '#99d9f4'
            onPress ={this.onTheGamePressed.bind(this)}
          >
            <Text style = {styles.buttonText}>
              Start Game
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style = {styles.button2}
            underlayColor = '#99d9f4'
            onPress ={this.onHowToPlayPressed.bind(this)}
          >
            <Text style = {styles.buttonText}>
              How To Play
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style = {styles.button3}
            underlayColor = '#99d9f4'
            onPress ={this.onAboutUsPressed.bind(this)}
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
    backgroundColor: '#34495E',
    height: 1000,
  },

  top: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 100,

 },

 header:{
     justifyContent: 'center',
     alignSelf: 'center',
     fontSize: 45,
     color: 'white',
     fontFamily: 'avenir'
 },

 names:{
     justifyContent: 'center',
     alignSelf: 'center',
     fontSize: 14,
     color: 'white',
     fontFamily: 'avenir'
 },

 creators: {
     flexDirection: 'row',
     alignItems: 'center',

},

 image: {
   width: 100,
   height: 100,
   flexDirection: 'row',
   margin: 10,
   borderRadius:50,
   marginTop: 40,
 },

 flowRight: {
   flexDirection: 'row',
   alignItems: 'center'
 },

  button1: {
    flex: 1,
    backgroundColor: '#F39C12',
    width: 200,
    padding:10,
    borderRadius: 20,
    margin: 20,
  },

  button2: {
    flex: 1,
    backgroundColor: '#D35400',
    width: 200,
    padding:10,
    borderRadius: 20,
    margin: 20,
  },

  button3: {
    flex: 1,
    backgroundColor: '#C0392B',
    width: 200,
    padding:10,
    borderRadius: 20,
    margin: 20,
  },

  buttonAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 35,
  },

  buttonText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'avenir'
  }
});

module.exports = WelcomePage;
