import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';

const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function MainScreenCrearChamba({navigation}){

  const goToMain=()=>{
    navigation.navigate('empleadorMain', { screen: 'main' })
  }

    return(
        <View style={styles.body}>
            <ScrollView style={{flex:1,width:'100%'}}>
                <View>
                    
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
                    <TextInput style={styles.boxtitle} placeholder='Tu Problema'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Descripcion Breve
                    </Text>
                    <TextInput style={styles.boxDescB} 
                    placeholder='Cuenta en 2 lineas un resumen de tu problema.'
                    multiline
                    numberOfLines={2}
                    
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Descripcion Completa
                    </Text>
                    <TextInput style={styles.boxDescC} 
                    placeholder='Cuenta a Mayor detalle el problema que tienes'
                    multiline
                    numberOfLines={5}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Fotos: Min.3
                    </Text>
                </View>
                <View style={styles.view}>
                  <TouchableOpacity style={styles.inputImages}>
                    <Entypo name="circle-with-plus" size={110} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Cantidad de Empleados
                    </Text>
                </View>
                <View style={styles.view}>
                  <TextInput style={styles.numE} placeholder='Max:6'></TextInput>
                </View>
                <View>
                    <Text style={styles.title2}>
                        Monto a Pagar:
                    </Text>
                </View>
                <View style={styles.view}>
                  <TextInput style={styles.numE} placeholder='Bs.'></TextInput>
                </View>
                <View style={styles.view}>
                  <TouchableOpacity onPress={goToMain} style={styles.botonC}>
                    <Text style={styles.buttonText}>Crear Chamba</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={styles.botonCa}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity> */}
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
        paddingTop:StatusBarHeight+10,
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
        //fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
      },
      title2:{
        color:'#000',
        fontSize:20,
        //fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'bold',
        margin:10
      },
      boxtitle:{
        width:400,
        height: 40,
        paddingLeft: 15,
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
        paddingTop:15,
        padding:15,
        borderRadius:10,
        margin:13,
        justifyContent:'flex-start'
      },
      boxDescC:{
        width:400,
        height: 150,
        borderWidth:2,
        borderColor:'#555',
        paddingTop:15,
        padding:15,
        borderRadius:10,
        margin:13,
        justifyContent:'flex-start',

      },
      inputImages:{
        width:130,
        height:130,
        borderRadius:65,
        backgroundColor:'#1fd655',
        margin:30,
        alignItems:'center',
        justifyContent:'center'
      },
      numE:{
        width:120,
        height: 50,
        borderWidth:2,
        borderColor:'#555',
        paddingLeft:15,
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
        marginBottom:40
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
        //fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'600',
      },
    }
  )