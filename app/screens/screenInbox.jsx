import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainInbox from '../cards/mainInbox';

export default function MainScreeninbox(){
    return(
        <View style={styles.body}>
        <ScrollView style={{flex:1,width:'100%'}}>
            <View style={styles.encabezado}>
                <Text style={styles.userEncabezado}> 
                    Hola, Kanye
                </Text>
            </View>
            <Text style={styles.title}>
                Mas Recientes
            </Text>
          <View style={styles.body}>
            <MainInbox/>
            <MainInbox/>
          </View>
        </ScrollView>
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
      encabezado:{
        height:85,
        flexDirection: 'row',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
      },

      title:{
        color:'#000',
        fontSize:30,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'normal',
        margin:20,
        justifyContent:'center',
        alignItems:'flex-start',
      },
      userEncabezado:{
        color:'#000',
        fontSize:30,
        fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'normal',
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        margin:15
      },

    }
  )