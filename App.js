import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainMenu from './app/screens/mainMenu';
import MainScreeninbox from './app/screens/screenInbox';
import MainChambaProceso from './app/screens/screenChambaProceso';
import MainChambaTerminada from './app/screens/screenChambaTerminada';
import MainChambaProcesoEmpleador from './app/screens/screenChambaProcesoEmpleador';
import MainScreenCrearChamba from './app/screens/screenCrearChamba';

export default function App() {
  return (
    //<MainMenu/>
    //<MainScreeninbox/>
    //<MainChambaProceso/>
    //<MainChambaTerminada/>
    //<MainChambaProcesoEmpleador/>
    <MainScreenCrearChamba/>
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
