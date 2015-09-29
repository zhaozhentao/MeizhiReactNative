'use strict';

var React = require('react-native');
var Home = require('./js/home');
var ToolbarAndroid = require('ToolbarAndroid');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MeizhiReactNative = React.createClass({
  render: function() {
    return (
          <View style={styles.container}>
            <ToolbarAndroid
              title="Lofter"
              titleColor="white"
              style={styles.toolbar}/>
              <Home/>
              <View style={{height: 54, backgroundColor: "#2f2f2f"}}>

              </View>
          </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  toolbar: {
    backgroundColor: '#202628',
    height: 56,
  },  
});

AppRegistry.registerComponent('MeizhiReactNative', () => MeizhiReactNative);
