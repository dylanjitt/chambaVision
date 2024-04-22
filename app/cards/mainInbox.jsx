import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';

import { useFonts } from 'expo-font';
import { MaterialCommunityIcons, Fontisto ,FontAwesome} from '@expo/vector-icons';

export default function MainInbox(props){
    return(
      <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <View style={styles.userImage}></View>
        </View>
        <View style={styles.body2}>
            <Text style>
              <Text style={{ fontWeight: 'bold' }}>Usuario123</Text> te ha seleccionado para el siguiente trabajo:
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Necesito Plomero</Text>
            </Text>
        </View>
        <View>
          <TouchableOpacity onPress={props.exe} style={styles.buttonAceptar}>
          <Fontisto name="check" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonNegar}>
          <FontAwesome name="close" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      width:100,
      alignItems:'center',
      justifyContent:'center',
      margin:10
    },
    body:{
      width:400,
      height:85,
      flexDirection: 'row',
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

    body2: {
      width:205,
      height:80,
      flexDirection: 'column',
      backgroundColor:'#fff',  
      justifyContent:'center',
      alignItems:'flex-start',
      paddingRight:10
    },

    userImage:{
      width:41,
      height:41,
      borderRadius:100,
      backgroundColor:'#000',
      marginLeft:15,
      marginRight:30
    },

    buttonAceptar:{
      width:40,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      backgroundColor:'#1fd655',
      marginRight:13,
    },

    buttonNegar:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#ff0000',
        marginRight:13,
        
        
      },

    buttonText:{
      color:'#fff',
      fontSize:30,
      fontFamily:'Space Grotesk',
      fontStyle:'normal',
      fontWeight:'600',
      
    },

    }
)