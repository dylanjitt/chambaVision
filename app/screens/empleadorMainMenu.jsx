import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MiChambaCard from '../cards/misChambasCard';
import Header from '../buttons/header';
export default function EmpladorMain({ navigation }) {

  const switchMode = () => {
    navigation.navigate('Main', { screen: 'mainChamba' })
  }

  const goToMiChamba = () => {
    navigation.navigate('postulantes')
  }

  return (
    <>
      <Header exe={switchMode} color="#35DB5A" text='Mis Chambas' />
      <View style={styles.body}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.body}>
            <MiChambaCard exe={goToMiChamba} />
          </View>
        </ScrollView>
      </View>
    </>


  );
}

const styles = StyleSheet.create(
  {
    body: {
      flex: 1,
      backgroundColor: '#eaeaea',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
)