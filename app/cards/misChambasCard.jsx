import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';

import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MiChambaCard(props){
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.image} source={{uri:'https://peru21.pe/resizer/jgN0rPRFr-PVE2Gh65x18woLvBE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GSDBVZULCZETNDCKGLOYAO6WKQ.jpeg'}}/>
        <View style={{alignItems:'center'}}>
          <Text style={styles.title}>Plomero</Text>
          <Text style={styles.descr}>Se necesita plomero para el arreglo de tuberías en mi cocina</Text>
          <Text style={styles.price}>500 Bs</Text>
        </View>
        <TouchableOpacity onPress={props.exe} style={styles.button}>
          <Text style={styles.buttonText}>Ver Postulantes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:100,
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    marginTop:0,
    marginBottom:40
  },
  body:{
    width:400,
    height:510,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:10,
    shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.27,
        elevation: 10,
  },
  userImage:{
    width:41,
    height:41,
    borderRadius:100,
    backgroundColor:'#000',
    margin:10,
    marginLeft:0
  },
  userText:{
    color:'#000',
    // fontFamily:"Bree Serif",
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize: 24
  },
  image:{
    width:370,
    height:260,
    borderRadius:10,
    backgroundColor:'#00000050',
    marginTop:15
  },
  title:{
    color:'#000',
    fontSize:24,
   //fontFamily:'Space Grotesk',
    fontStyle:'normal',
    fontWeight:'bold',
    margin:10
    
  },
  descr:{
    color:'#000',
    fontSize:18,
    // fontFamily:'Space Grotesk',
    fontStyle:'normal',
    fontWeight:'normal',
    marginLeft:10,
    marginRight:10,
    textAlign:'center',
    paddingLeft:10,
    paddingRight:10
  },
  price:{
    color:'#000',
    fontSize:24,
    // fontFamily:'Space Grotesk',
    fontStyle:'normal',
    fontWeight:'600',
    margin:10
  },
  button:{
    width:366,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#35DB5A',
    margin:10
  },
  buttonText:{
    color:'#fff',
    fontSize:28,
    // fontFamily:'Space Grotesk',
    fontStyle:'normal',
    fontWeight:'600',
    
  }
})