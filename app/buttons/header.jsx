import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';

import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function Header(props){
return(
  <View style={styles.container}>
<View style={styles.body}>
  <View style={[styles.menuContainer,{backgroundColor:props.color}]}>
    <TouchableOpacity style={styles.imgContainer}/>
  </View>
  <View style={styles.messageContainer}>
     <Text style={styles.message} >{props.text}</Text>
  </View>
 
</View>
</View>
)
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f2f2f2',
  },
  body:{
    height:70,
    width:"100%",
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#f2f2f2',
    marginTop:StatusBarHeight,
    flexDirection:'row'

  },
  menuContainer:{
    height:'100%',
    width:86,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  imgContainer:{
    width:54,
    height:54,
    borderRadius:100,
    backgroundColor:'#fff',
    marginRight:10
  },
  messageContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    paddingRight:80
  },
  message:{
    fontSize:28,
    fontWeight:'500',
    color:'#000',

  }
})