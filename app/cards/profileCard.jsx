import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';

import { useFonts } from 'expo-font';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';


export default function ProfileCard(props){
  return(
    <View style={style.body}>
      <Ionicons name='person' size={64} color={'#404040'}/>
      <Text style={style.person}>Juan Perez</Text>
      <Text style={style.descr}>Especialista en Jardinería</Text>
      <TouchableOpacity onPress={props.exe} style={style.button}>
        <Text style={style.buttonText}>Ver perfil</Text>      
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  body:{
    width:185,
    height:224,
    backgroundColor:'#f1f1f1',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.27,
      elevation: 1,
  },
  person:{
    fontSize:15,
    fontWeight:'bold',
    color:'#000',
    margin:10
  },
  descr:{
    fontSize:12,
    fontWeight:'normal',
    color:'#000',
  },
  button:{
    width:167,
    height:48,
    backgroundColor:'#35DB5A',
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.27,
    elevation: 1,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'#fff',
    fontSize:22,
    fontWeight:'600'
  },
})