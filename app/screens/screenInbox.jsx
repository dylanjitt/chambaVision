import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainInbox from '../cards/mainInbox';
import Header from '../buttons/header';
export default function MainScreeninbox({navigation}){

  const goToChamba = () => {
    navigation.navigate('inProcess')
  }
    return(
        <View style={styles.body}>
        <ScrollView style={{flex:1,width:'100%'}}>
            <Header color="#3884fd" text='Hola, Kanye'/>
            <Text style={styles.title}>
                Mas Recientes
            </Text>
          <View style={styles.body}>
            <MainInbox exe={goToChamba} />
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
        // fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'normal',
        margin:20,
        marginTop:10,
        justifyContent:'center',
        alignItems:'flex-start',
      },
      userEncabezado:{
        color:'#000',
        fontSize:30,
        // fontFamily:'Space Grotesk',
        fontStyle:'normal',
        fontWeight:'normal',
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        margin:15
      },

    }
  )