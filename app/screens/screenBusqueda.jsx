import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import MiChambaCard from '../cards/misChambasCard';
import MainCard from '../cards/mainCard';
import Header from '../buttons/header';

export default function BuscadorMain() {
  return (
    <>
      <Header color="#3884fd" text='Hola, Kanye' />
      <View style={styles.body}>
        <ScrollView style={{ flex: 1, width: '100%' }}>

          <View style={styles.view}>

          </View>

        </ScrollView>
        <View style={styles.view2}>
          <View style={styles.viewBusqueda}>
            <View style={styles.searchIconContainer}>
              <Entypo name="magnifying-glass" size={40} color="black" />
            </View>
            <View style={styles.view3}>
              <TextInput style={styles.boxBusqueda} placeholder="Plomero..." paddingLeft={10}></TextInput>
              <View style={styles.underline}></View>
            </View>
          </View>

        </View>
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
      alignItems: 'center'
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    view2: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 25,
    },
    view3: {
      flex: 1,
      height: 40,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewBusqueda: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 400,
      height: 65,
      paddingLeft: 8,
      backgroundColor: '#fff',
      shadowColor: '#000',
      borderRadius: 15,
      borderWidth: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: -1,
        height: 6,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3.27,
      elevation: 10,
    },
    searchIconContainer: {
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxBusqueda: {
      flex: 1,
      width: 325,
      height: 5,
      backgroundColor: '#ffff',
    },
    underline: {
      width: 310,
      height: 2,
      backgroundColor: '#000000',
      marginTop: 0,
    },
  }
)