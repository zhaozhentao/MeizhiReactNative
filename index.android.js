'use strict';

var React = require('react-native');
var Home = require('./js/home');
var ToolbarAndroid = require('ToolbarAndroid');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableNativeFeedback,
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
              <View style={styles.tab_bar}>
                <TouchableNativeFeedback>
                  <View style={styles.tab_btn}>
                    <Image style={styles.tab_img} source={require('image!bb_btn_home_select')}/>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                  <View style={styles.tab_btn}>
                    <Image style={styles.tab_img} source={require('image!bb_btn_label_select')}/>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                  <View style={[styles.tab_btn, {backgroundColor: "#8dbe05"}]}>
                    <Image style={styles.tab_img} source={require('image!bb_btn_post_select2')}/>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                  <View style={styles.tab_btn}>
                    <Image style={styles.tab_img} source={require('image!bb_btn_message_select')}/>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                  <View style={styles.tab_btn}>
                    <Image style={styles.tab_img} source={require('image!bb_btn_account_select')}/>
                  </View>
                </TouchableNativeFeedback>                                                
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
  tab_bar:{
    height: 54, 
    backgroundColor: "#2f2f2f",
    flexDirection:"row",
    alignItems: "center",
  },
  tab_btn:{
    flex: 1,
    height: 54,
    alignItems: "center",
  },
  tab_img:{
    height: 54,
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('MeizhiReactNative', () => MeizhiReactNative);
