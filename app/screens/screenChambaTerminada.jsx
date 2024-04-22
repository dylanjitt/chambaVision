import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function MainChambaTerminada(){
  return(
      <View style={styles.body}>
        <View>
            <View style={styles.logoImage}></View>
        </View>
        <View>
            <Text style={styles.title}>
                Chamba terminada!
            </Text>
        </View>
        <View style={styles.viewDes}>
            <Text style={styles.descr}>
            Tu trabajo ha terminado exitosamente! tu pago está en proceso de ser depositado.
            Gracias por confiar en chambavision para tu gran trabajo.
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold'}}>Hasta la proxima Chamba!</Text>
            </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonAceptar}>
            <Text style={styles.buttonText}>Finalizar</Text>
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
        backgroundColor:'#35DB5A',
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
        fontSize:24,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        marginTop:30,
        
      },
      descr:{
        color:'#000',
        fontSize:15,
        fontFamily:'Space Grotesk',
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
        width:140,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'#35DB5A',
        marginTop:28,
        marginBottom:150
      },
      buttonText:{
        color:'#fff',
        fontSize:22,
        fontFamily:'normal',
        fontStyle:'normal',
        fontWeight:'300',
      }
  }

)