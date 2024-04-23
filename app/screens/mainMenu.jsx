import { StyleSheet, Text, View, Image, Platform, NativeModules, SafeAreaView, TouchableOpacity, TextInput, StatusBar, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView, SectionList } from 'react-native';

import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainCard from '../cards/mainCard';
import Header from '../buttons/header';
export default function MainMenu({ navigation }) {

  const goToMenuChamba = (chamba) => {
    navigation.navigate('chambaMenu',{chamba})
  }

  const switchMode = () => {
    navigation.navigate('empleadorMain', { screen: 'main' })
  }

  const [chambas, setChambas] = useState(
    [
      {usuario: 'Rodrigo Perez',imagen:'https://peru21.pe/resizer/jgN0rPRFr-PVE2Gh65x18woLvBE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GSDBVZULCZETNDCKGLOYAO6WKQ.jpeg', title:'Necesito Plomero',shortDescr:'Se necesita plomero para el arreglo de tuberías en mi cocina',descripcion:'Descripcion corta del problema como por ejemplo que empezo a gotear hace 2 dias en la parte de desechos, solo lavamos platos y caen uno que otro monton de arroz, pero no creo que ese sea el problema gotea mucho y no veo fisuras en los tubos de salida.',pago:'500'},
      {usuario: 'Sandra Mercado',imagen:'https://pantallasled.net/wp-content/uploads/2017/12/pantalla-led-rota-tiene-arreglo-2.jpg', title:'Mi tele se rompió',shortDescr:'Necesito alguien que sepa de televisores para que me lo repare!',descripcion:'hace 3 dias mi hijo, en medio de las travesuras aventó un avioncito de metal a la tele mientras veia maria la del barrio, por favor alguien que sepa reparar televisores que me pueda ayudar! ofrezco una buena paga, gracias!',pago:'1000'}
    ]
  )

  return (

    <>
      <Header exe={switchMode} color="#3884fd" text='Hola, Kanye' />
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.body}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.body}>
            {
              chambas.map((chamba)=>(
                <MainCard
                user={chamba.usuario}
                img={chamba.imagen}
                title={chamba.title}
                shortDescr={chamba.shortDescr}
                pago={chamba.pago}
                exe={() => goToMenuChamba(chamba)}
                />
              ))
            }
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
      alignItems: 'center'
    },
  }
)