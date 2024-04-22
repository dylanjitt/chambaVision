import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons,FontAwesome,AntDesign} from '@expo/vector-icons';

const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function CreateAccount({navigation}){

  const [confirm,setConfirm]=useState(true)

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPwd2]=useState('')

  const goToMain = () => {
    navigation.navigate('login')
  }

  return(
    <View style={style.body}>
      <StatusBar barStyle={'default'}/>
      <ScrollView>
        <View style={[style.body,{width:430}]}>
          <View style={{marginTop:StatusBarHeight+15,margin:20,width:'100%',alignItems:'flex-start'}}>
            <Text style={style.titleHeader}>Crear Cuenta</Text>
          </View>

          <View style={{alignItems:'flex-start', marginBottom:25}}>
            <Text style={style.subtitle}>Nombres</Text>
            <TextInput style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='Kanye Omari'/>
          </View>

          <View style={{alignItems:'flex-start',marginBottom:25}}>
            <Text style={style.subtitle}>Apellidos</Text>
            <TextInput style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='West Kardashian'/>
          </View>

          <View style={{alignItems:'flex-start',marginBottom:25}}>
            <Text style={style.subtitle}>Correo Electrónico</Text>
            <TextInput onChangeText={(value)=>setEmail(value)} inputMode='email' style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='perry@gmail.com'/>
          </View>

          <View style={{flexDirection:'row',marginBottom:25}}>

            <View style={{alignItems:'flex-start',marginBottom:25,marginRight:10}}>
              <Text style={style.subtitle}>Numero</Text>
              <TextInput inputMode='numeric' style={[style.inputBox,{width:197}]} placeholderTextColor={'#00000050'} placeholder='69420666'/>
            </View>

            <View style={{alignItems:'flex-start',marginBottom:25,marginLeft:5}}>
              <Text style={style.subtitle}>Fecha nacimiento</Text>
              <TextInput style={[style.inputBox,{width:163}]} placeholderTextColor={'#00000050'} placeholder='10/jul/2026'/>
            </View>

          </View>

          <View style={{alignItems:'flex-start',marginBottom:25}}>
            <Text style={style.subtitle}>Fotografia</Text>
            <View style={{alignItems:'center',justifyContent:'center',width:'100%',marginTop:10}}>
              <TouchableOpacity style={{width:161,height:161, borderRadius:100,backgroundColor:'#78919d20',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:128,height:128, borderRadius:100,backgroundColor:'#fafafa',alignItems:'center',justifyContent:'center'}}>
                  <FontAwesome name="camera" size={58} color="#969696" />
                </View>
              </TouchableOpacity>
              <View style={style.textContainer}>
                <Text style={style.textDisclaimer}>Ya que los trabajos involucran personas reales, necesitamos una foto tomada con tu cámara para asegurarnos que eres una persona real y garantizar legitimidad tanto en la creación de trabajos como la postulación de los mismos.</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>

            <View style={{alignItems:'flex-start',marginBottom:25,marginRight:10}}>
              <Text style={style.subtitle}>Cuenta bancaria</Text>
              <TextInput inputMode='numeric' style={[style.inputBox,{width:197}]} placeholderTextColor={'#00000050'} placeholder='12345678969789'/>
            </View>

            <View style={{alignItems:'flex-start',marginBottom:25,marginLeft:5}}>
              <Text style={style.subtitle}>Banco</Text>
              <TextInput style={[style.inputBox,{width:163}]} placeholderTextColor={'#00000050'} placeholder='BCP'/>
            </View>
          </View>

          <View style={{alignItems:'flex-start', marginBottom:25}}>
            <Text style={style.subtitle}>Contraseña</Text>
            <TextInput onChangeText={(value)=>setPassword(value)} style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='8 Caracteres min. 1 digito y 1 mayus'/>
          </View>

          <View style={{alignItems:'flex-start',marginBottom:25}}>
            <Text style={style.subtitle}>Repetir Contraseña</Text>
            <TextInput onChangeText={(value)=>setPwd2(value)} style={style.inputBox} placeholderTextColor={'#00000050'} placeholder='Karma'/>
          </View>

          <View style={{flexDirection:'row',marginBottom:30,justifyContent:'center',alignItems:'center'}}>

            <TouchableOpacity onPress={()=>setConfirm(!confirm)} style={{width:24,height:24, borderColor:'#d9d9d9',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
              {confirm==true &&(
                <AntDesign name="checksquare" size={20} color="#d9d9d9" />
              )}
            </TouchableOpacity>
            <Text style={[style.subtitle,{fontSize:16,marginLeft:10}]}>Acepto los Términos y Condiciones</Text>
          </View>

          <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>Crear Cuenta</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create(
  {
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#1D3758',
    },
    titleHeader:{
      fontSize:28,
      fontWeight:'bold',
      color:'#fff',
      paddingLeft:20
    },
    subtitle:{
      fontSize:20,
      fontWeight:'bold',
      color:'#fafafa'
    },
    inputBox:{
      width:376,
      height:48,
      backgroundColor:'#fff',
      color:'#000',
      paddingLeft:15,
      alignItems:'center',
      justifyContent:'center',
      marginTop:15,
      borderRadius:10,
      fontSize:16
    },
    textContainer:{
      width:352,
      height:120,
      marginTop:20
    },
    textDisclaimer:{
      textAlign:'center',
      fontSize:14,
      fontWeight:'bold',
      color:'#fff'
    },
    button:{
      alignItems:'center',
      justifyContent:'center',
      width:194,
      height:64,
      borderRadius:30,
      backgroundColor:'#0082ad',
      marginBottom:60
    },
    textButton:{
      fontSize:24,
      color:'#fff',
      fontWeight:'600'
    }
  }
)