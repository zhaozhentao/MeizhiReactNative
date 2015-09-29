'use strict';

var React = require('react-native');
var Home = require('./js/home');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MeizhiReactNative = React.createClass({
  render: function() {
    return (
      <Home>
      </Home>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('MeizhiReactNative', () => MeizhiReactNative);
