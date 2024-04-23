import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo,FontAwesome,MaterialIcons} from '@expo/vector-icons'


import Login from './app/screens/login';
import CreateAccount from './app/screens/createAcc';
import MainMenu from './app/screens/mainMenu';
import ChambaMenu from './app/screens/chambaMenu';
import PostulantesMenu from './app/screens/postulantesMenu';
import Perfil from './app/screens/perfil';
import EmpladorMain from './app/screens/empleadorMainMenu';
import MainChambaProceso from './app/screens/screenChambaProceso';
import MainChambaProcesoEmpleador from './app/screens/screenChambaProcesoEmpleador';
import MainChambaTerminada from './app/screens/screenChambaTerminada';
import MainScreenCrearChamba from './app/screens/screenCrearChamba';
import MainScreeninbox from './app/screens/screenInbox';
import BucadorMain from './app/screens/screenBusqueda';
import BuscadorEmpleador from './app/screens/screenBusquedaEmpl';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header:()=>null}}>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='createAccount' component={CreateAccount}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='chambaMenu' component={ChambaMenu}/>
        <Stack.Screen name='inProcess' component={MainChambaProceso}/>
        <Stack.Screen name='done' component={MainChambaTerminada}/>
        <Stack.Screen name='empleadorMain' component={Empleador}/>
        <Stack.Screen name='postulantes' component={PostulantesMenu}/>
        <Stack.Screen name='profile' component={Perfil}/>
{/* TODO: Put here when profile screen si avaliable */}
        <Stack.Screen name='employerProcess' component={MainChambaProcesoEmpleador}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

function Main(){
  return(
  <Tab.Navigator 
  screenOptions={({route})=>({
    tabBarStyle:{
      backgroundColor:'#0A1B2B',
      borderRadius:10
    },
    tabBarIcon: ({focused,size,color})=>{
      let iconname;
      if (route.name=='buscar'){
        iconname=<FontAwesome name="search" size={32} color={color}/>
      }else if (route.name=='mainChamba'){
        iconname=<Entypo name="home" size={36} color={color} />
      }else if (route.name=='inbox'){
        iconname=<MaterialIcons name="email" size={36} color={color} />
      }
      return iconname;
    },
    header:()=>null,
    tabBarActiveTintColor:'#3884fd',
    tabBarInactiveTintColor:'#fff',
    tabBarShowLabel:false
    })}
    >

          <Tab.Screen name='inbox' component={MainScreeninbox} options={{tabBarBadge:2}}/>
          <Tab.Screen name='mainChamba' component={MainMenu} />
          <Tab.Screen name='buscar' component={BucadorMain} />
          
  </Tab.Navigator>);
}

function Empleador(){
  return(
    <Tab.Navigator 
  screenOptions={({route})=>({
    tabBarStyle:{
      backgroundColor:'#0A1B2B',
      borderRadius:10
    },
    tabBarIcon: ({focused,size,color})=>{
      let iconname;
      if (route.name=='search'){
        iconname=<FontAwesome name="search" size={32} color={color}/>
      }else if (route.name=='main'){
        iconname=<Entypo name="home" size={36} color={color} />
      }else if (route.name=='add'){
        iconname=<Entypo name="circle-with-plus" size={52} color={color} />
      }
      return iconname;
    },
    header:()=>null,
    tabBarActiveTintColor:'#35DB5A',
    tabBarInactiveTintColor:'#fff',
    tabBarShowLabel:false
    })}
    >
          <Tab.Screen name='main' component={EmpladorMain} />
          <Tab.Screen name='add' component={MainScreenCrearChamba} />
          <Tab.Screen name='search' component={BuscadorEmpleador} />
  </Tab.Navigator>);
}


