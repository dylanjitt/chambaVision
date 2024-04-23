import { StyleSheet, Text, View, TouchableOpacity, Button,Platform } from 'react-native';
import Header from '../buttons/header';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome,Zocial } from '@expo/vector-icons';

const StatusBarHeight = Platform.OS === 'ios' ? 50 : 10;

export default function Perfil({ navigation }) {

  const goToChmambaProcessEmpl = () => {
    navigation.navigate('employerProcess')
  }

  return (
    <View style={styles.body}>
      <StatusBar style='dark' />
      <View style={styles.dataContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
          <TouchableOpacity style={{ marginLeft: 80, width: 161, height: 161, borderRadius: 100, backgroundColor: '#78919d20', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 128, height: 128, borderRadius: 100, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center' }}>
              {/*
                        imagen del usuario
                        */}
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 20, alignItems: 'flex-start' }}>
            <Text style={styles.titleHeader}>Luis Andres Paricollo Parra</Text>
            <Text style={styles.subtitle}>CI: 616237</Text>
          </View>
        </View>
        <View >
          <View style={{ width: 360 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
              <View style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: '#25D366', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <FontAwesome name="whatsapp" size={30} color="#fff" />
              </View>
              <Text style={styles.subtitle2}>+591 79126364</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
              <View style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: '#3884FD', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <Zocial name="email" size={26} color="#fff" />
              </View>
              <Text style={styles.subtitle2}>dylanjitton@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center', width: '100%', marginTop: 40 }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text style={styles.title2}>Hard Skills:</Text>
          <Text style={styles.subtitle2}>Plomeria</Text>
        </View>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text style={styles.title2}>Soft Skills:</Text>
          <Text style={styles.subtitle2}>Paciente</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goToChmambaProcessEmpl} >
        <Text style={styles.textButton}>contactar</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create(
  {
    body: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    dataContainer: {
      backgroundColor: '#eaeaea',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: StatusBarHeight+20,
      borderBottomRightRadius: 360,
      width: '100%'
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
    titleHeader: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
      flexWrap: 'wrap',
      maxWidth: '70%' // Limitar el ancho máximo del contenedor
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000'
    },
    title2: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },
    button: {
      width: 168,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#35DB5A',
      marginTop: 50,
      borderRadius: 10
    },
    textButton: {
      fontSize: 24,
      color: '#fff',
      fontWeight: '600'
    }
  }
)