import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './app/screens/login';
import CreateAccount from './app/screens/createAcc';
import MainMenu from './app/screens/mainMenu';
import ChambaMenu from './app/screens/chambaMenu';
import PostulantesMenu from './app/screens/postulantesMenu';
import EmpladorMain from './app/screens/empleadorMainMenu';
import MainChambaProceso from './app/screens/screenChambaProceso';
import MainChambaProcesoEmpleador from './app/screens/screenChambaProcesoEmpleador';
import MainChambaTerminada from './app/screens/screenChambaTerminada';
import MainScreenCrearChamba from './app/screens/screenCrearChamba';
import MainScreeninbox from './app/screens/screenInbox';
import BucadorMain from './app/screens/screenBusqueda';


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Perfil from './app/screens/perfil';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    //<CreateAccount/>
    //<MainScreenCrearChamba/>
    //<MainChambaProceso/>
    //<MainScreeninbox/>
    <Perfil/>
  );
}

function Main(){
  return(
  <Tab.Navigator screenOptions={{header:()=>null}}>
          <Tab.Screen name='mainChamba' component={MainMenu}/>
          <Tab.Screen name='inbox' component={MainScreeninbox}/>
  </Tab.Navigator>)
}

function flujoChamba(){
  <Stack.Navigator>
    {/* <Stack.Screen name='chamba' component={ChambaMenu}/> */}

  </Stack.Navigator>
}


