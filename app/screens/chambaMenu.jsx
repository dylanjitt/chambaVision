import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList, ImageBackground } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'


const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function ChambaMenu({navigation}){

  const backMain = () => {
    navigation.navigate('Main',{screen:'mainChamba'})
  }
  return(
    <View style={styles.body}>
      <StatusBar barStyle={'light-content'}/>
        <ImageBackground style={styles.image} source={{uri:'https://peru21.pe/resizer/jgN0rPRFr-PVE2Gh65x18woLvBE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GSDBVZULCZETNDCKGLOYAO6WKQ.jpeg'}}>
          <LinearGradient
            colors={['rgba(0,0,0,0.85)', 'rgba(0,0,0,0)']}
            style={styles.overlay} />
        </ImageBackground>
     
      <Text style={styles.title}>Necesito Plomero</Text>
      <Text style={styles.subtitle}>Se necesita plomero para el arreglo de tuberias en mi cocina.</Text>
      <Text style={styles.text}>Descripcion corta del problema como por ejemplo que empezo a gotear hace 2 dias en la parte de desechos, solo lavamos platos y caen uno que otro monton de arroz, pero no creo que ese sea el problema gotea mucho y no veo fisuras en los tubos de salida.</Text>
      <Text style={styles.price}>500 Bs.</Text>
      <TouchableOpacity onPress={backMain} style={styles.button}>
        <Text style={styles.buttonText}>Postular</Text>      
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',margin:40}}>
          <View style={styles.userImage}></View>
          <Text style={styles.userText}>PandaFernandez</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    body:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#fafafa'
    },
    image:{
      width:"100%",
      height:300,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      overflow:'hidden'
    },
    overlay: {
      width:'100%',
      height:StatusBarHeight*2,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 1, // Asegurar que la capa esté encima de la imagen
    },
    title:{
      fontSize:34,
      fontWeight:'bold',
      color:'#000',
      margin:18
    },
    subtitle:{
      color:'#4b4b4b',
      textAlign:'center',
      fontSize:20,
      fontWeight:'600',
      padding:40,
      paddingTop:10,
      paddingBottom:20
    },
    text:{
      color:'#4b4b4b',
      textAlign:'center',
      fontSize:20,
      fontWeight:'normal',
      padding:40,
      paddingTop:0,
      paddingBottom:20
    },
    price:{
      fontSize:30,
      color:"#000",
      fontWeight:'700'
    },
    button:{
      width:180,
      height:60,
      backgroundColor:'#3884fd',
      borderRadius:30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.27,
      elevation: 1,
      marginTop:30,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText:{
      color:'#fff',
      fontSize:28,
      fontWeight:'600'
    },
    userImage:{
      width:24,
      height:24,
      borderRadius:100,
      backgroundColor:'#000',
      margin:5,
      marginLeft:0
    },
    userText:{
      color:'#000',
      fontStyle:'normal',
      fontWeight:'bold',
      fontSize: 18
    },

  }
)