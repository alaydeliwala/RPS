'use strict';
var React = require('react');
var ReactNative = require('react-native');
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
var WelcomePage = require ('./WelcomePage');
var TheGame = require ('./TheGame');

class RPSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style= {styles.container}
        initialRoute ={{
          title : 'Welcome to RPS',
          component: WelcomePage,
          titleTextColor: 'black',
      }}
      />
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
  }
});


ReactNative.AppRegistry.registerComponent('RPS', function() { return RPSApp });
