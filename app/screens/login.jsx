import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToCreate = () => {
    navigation.navigate('createAccount')
  }

  const gotoMain = () => {
    navigation.navigate('Main', { screen: 'mainChamba' })
  }

  return (
    <View style={style.body}>
      <StatusBar barStyle={'light-content'} />
      <View style={[style.body,{justifyContent:'flex-end'}]}>
        <Image style={style.logo} source={require('../../assets/chambaVisionLogo.png')} />
        <Text style={style.textLogo}>ChambaVisión</Text>
        <TextInput style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='Correo Electrónico' />
        <TextInput style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='Contraseña' secureTextEntry />
        <TouchableOpacity onPress={gotoMain} style={style.button}>
          <Text style={style.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', paddingTop: 140,paddingBottom:40 }}>
          <TouchableOpacity onPress={goToCreate} style={{ alignItems: 'center', margin: 10 }}>
            <Text style={[style.textButton, { fontWeight: 'bold' }]}>Crear Cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[style.textButton, { fontWeight: 'normal' }]}>Recuperar Contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

const style = StyleSheet.create(
  {
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1D3758',
    },
    logo: {
      width: 278,
      height: 168,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    textLogo: {
      color: '#fff',
      fontSize: 42,
      fontWeight: 'bold',
      marginBottom: 50
    },
    inputBox: {
      width: 376,
      height: 60,
      backgroundColor: '#fff',
      color: '#000',
      paddingLeft: 15,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      borderRadius: 10,
      fontSize: 16
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 194,
      height: 64,
      borderRadius: 30,
      backgroundColor: '#0082ad',
      marginTop: 25
    },
    textButton: {
      fontSize: 24,
      color: '#fff',
      fontWeight: '600'
    }
  }
)