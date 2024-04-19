import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainCard from '../cards/mainCard';
import Header from '../buttons/header';
export default function MainMenu(){
  return(
      <>
      <Header color="#3884fd" text='Hola, Kanye'/>
      <View style={styles.body}>
      <ScrollView style={{flex:1,width:'100%'}}>
        <View style={styles.body}>
          <MainCard/>
        </View>
      </ScrollView>
      </View>
      </>
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
  }
)