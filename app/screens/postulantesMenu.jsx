import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList, ImageBackground, FlatList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'

import ProfileCard from '../cards/profileCard';

const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function PostulantesMenu({navigation}){

  const [postulantes,setPostulantes]=useState([
    {name:'Andres Dylan Sanchez Oroz',descripcion:'Expecialista en jardinería',ci:'6958824',wpp:'75206757',mail:'dylanjitton2.0@gmail.com'},
    {name:'Juan ',descripcion:'Expecialista en jardinería',ci:'6958824',wpp:'75206757',mail:'dylanjitton2.0@gmail.com'}
  ]) 

  const goToProfile = () => {
    navigation.navigate('employerProcess')//TODO: Change Route when profile info screen is released
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
        <Text style={styles.text}>Se necesita plomero para el arreglo de tuberias en mi cocina.</Text>
        <Text style={styles.price}>500 Bs.</Text>
        <View style={{width:'100%',height:1,backgroundColor:'#000',marginTop:15}}/>
        <Text style={[styles.title,{marginBottom:5}]}>Postulantes</Text>
        <View style={{alignItems:'center',justifyContent:'center',width:'100%'}}>


          <FlatList

          scrollEnabled={'true'}
          numColumns={2}
          keyExtractor={item=>item.name}
          data={postulantes}
          justifyContent={'center'}
          alignItems={'center'}
          renderItem={({item,index})=>(
            <ProfileCard exe={goToProfile}/>
          )}
          />

        </View>

     
    </View>
  )
}

const styles = StyleSheet.create(
  {
    body:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      backgroundColor:'#fafafa'
    },
    image:{
      width:"100%",
      height:300,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
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
      fontSize:28,
      fontWeight:'bold',
      color:'#000',
      margin:18,
      marginLeft:10
    },
    text:{
      color:'#4b4b4b',
      textAlign:'left',
      fontSize:20,
      fontWeight:'normal',
      padding:20,
      paddingTop:0,
      paddingBottom:20,
      paddingLeft:10
    },
    price:{
      fontSize:30,
      color:"#000",
      fontWeight:'700',
      marginLeft:10
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