import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainCard from '../cards/mainCard';
import MiChambaCard from '../cards/misChambasCard';

export default function MainMenu(){
  return(
      <View style={styles.body}>
      <ScrollView style={{flex:1,width:'100%'}}>
        <View style={styles.body}>
          <MiChambaCard/>
          <MainCard/>
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
    }
  }
)