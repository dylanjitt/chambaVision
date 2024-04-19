import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainMenu from './app/screens/mainMenu';
import EmpladorMain from './app/screens/empleadorMainMenu';
import ChambaMenu from './app/screens/chambaMenu';
export default function App() {
  return (
    <ChambaMenu/>
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
    //flex:2,
    backgroundColor:'#1D3758',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:100
  }
});
