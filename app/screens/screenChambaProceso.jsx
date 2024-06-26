import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';


export default function MainChambaProceso({navigation}){

  const goDone = () => {
    navigation.navigate('done')
  }

  return(
      <View style={styles.body}>
        <View>
            <View style={styles.logoImage}>
              <FontAwesome name='suitcase' size={110} color={'#fff'}/>
            </View>
        </View>
        <View>
            <Text style={styles.title}>
                Chamba en Proceso!
            </Text>
        </View>
        <View style={styles.viewDes}>
            <Text style={styles.descr}>
            Recibirás tu pago cuando tu emplador determine que tu trabajo ha terminado, si tienes algun reclamo al respecto ponte en contacto con atención al cliente
            </Text>
        </View>
        <View>
          <TouchableOpacity onPress={goDone} style={styles.buttonAceptar}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create(
  {
    body:{
      flex:1,
      backgroundColor:'#eaeaea',
      justifyContent:'center',
      alignItems:'center'
    },
    logoImage:{
        width:200,
        height:200,
        backgroundColor:'#3884FD',
        margin:10,
        marginTop:0,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.27,
        elevation: 10,
       
      },
      title:{
        color:'#000',
        fontSize:34,
        // fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        marginTop:30,
        
      },
      descr:{
        color:'#000',
        fontSize:22,
        // fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'normal',
        marginLeft:10,
        textAlign:'center',
      },
      viewDes:{
        width:370,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
      },
      buttonAceptar:{
        width:180,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'#3884FD',
        marginTop:28,
        marginBottom:150
      },
      buttonText:{
        color:'#fff',
        fontSize:28,
        //fontFamily:'normal',
        fontStyle:'normal',
        fontWeight:'600',
      }
  }

)