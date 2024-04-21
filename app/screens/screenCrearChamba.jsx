import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MainScreenCrearChamba(){
    return(
        <View style={styles.body}>
            <ScrollView style={{flex:1,width:'100%'}}>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.volver} source={{uri:'https://th.bing.com/th/id/OIP.qlTqEGd7Qk0aRYBGRoeWSQHaHa?rs=1&pid=ImgDetMain'}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>
                        Nueva Chamba:
                    </Text>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Titulo
                    </Text>
                    <TextInput style={styles.boxtitle} placeholder='   Tu Problema'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Descripcion Breve
                    </Text>
                    <TextInput style={styles.boxDescB} placeholder='   Cuenta en 2 lineas un resumen de tu problema.'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Descripcion Completa
                    </Text>
                    <TextInput style={styles.boxDescC} placeholder='   Cuenta a Mayor detalle el problema que tienes'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Fotos: Min.3
                    </Text>
                </View>
                <View style={styles.view}>
                  <TouchableOpacity>
                    <Image style={styles.inputImages} source={{uri:'https://cdn-icons-png.flaticon.com/512/1004/1004733.png'}}/>
                  </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Cantidad de Empleados
                    </Text>
                </View>
                <View style={styles.view}>
                  <TextInput style={styles.numE} placeholder='   Max:6'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Monto a Pagar:
                    </Text>
                </View>
                <View style={styles.view}>
                  <TextInput style={styles.numE} placeholder='   Bs.'></TextInput>
                </View>
                <View style={styles.view}>
                  <TouchableOpacity style={styles.botonC}>
                    <Text style={styles.buttonText}>Crear Chamba</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botonCa}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
                
            </ScrollView>   
        </View>
    );
  }
  
  const styles = StyleSheet.create(
    {
      body:{
        flex:1,
        backgroundColor:'#ffffff',
      },
      view:{
        marginTop:0,
        justifyContent:'center',
        alignItems:'center',
      },
      volver:{
        width:30,
        height:30,
        borderRadius:18,
        backgroundColor:'#1fd655',
        marginLeft: 20,
        marginTop:40
      },
      title:{
        color:'#000',
        fontSize:28,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
      },
      title2:{
        color:'#000',
        fontSize:20,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        margin:10
      },
      boxtitle:{
        width:400,
        height: 40,
        borderWidth:2,
        borderColor:'#555',
        borderRadius:10,
        margin:13,
      },
      boxDescB:{
        width:400,
        height: 100,
        borderWidth:2,
        borderColor:'#555',
        borderRadius:10,
        margin:13,

      },
      boxDescC:{
        width:400,
        height: 150,
        borderWidth:2,
        borderColor:'#555',
        borderRadius:10,
        margin:13,

      },
      inputImages:{
        width:130,
        height:130,
        borderRadius:65,
        backgroundColor:'#1fd655',
        margin:30
      },
      numE:{
        width:120,
        height: 50,
        borderWidth:2,
        borderColor:'#555',
        borderRadius:10,
        margin:20,
      },
      inputPaga:{

      },
      botonC:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        margin:13,
        backgroundColor:'#35DB5A',
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.27,
        elevation: 10,
      },
      botonCa:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        margin:13,
        backgroundColor:'#6D7075',
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.27,
        elevation: 10,
      },
      buttonText:{
        color:'#fff',
        fontSize:18,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'600',
      },
    }
  )