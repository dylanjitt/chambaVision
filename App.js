import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './app/screens/login';

import MainMenu from './app/screens/mainMenu';
import ChambaMenu from './app/screens/chambaMenu';
import PostulantesMenu from './app/screens/postulantesMenu';
import EmpladorMain from './app/screens/empleadorMainMenu';
import MainChambaProceso from './app/screens/screenChambaProceso';
import MainChambaProcesoEmpleador from './app/screens/screenChambaProcesoEmpleador';
import MainChambaTerminada from './app/screens/screenChambaTerminada';
import MainScreenCrearChamba from './app/screens/screenCrearChamba';
import MainScreeninbox from './app/screens/screenInbox';

export default function App() {
  return (
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  half1:{
    backgroundColor:'#1D3758',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:100
  }
});
