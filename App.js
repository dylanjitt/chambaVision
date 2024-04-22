import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo,FontAwesome,MaterialIcons} from '@expo/vector-icons'


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
    })}
    tabBarOptions={ {
      activeTintColor:'#3884fd',
      inactiveTintColor:'#fff',
      showLabel:false,
      headerShown:false
    }}>
          <Tab.Screen name='buscar' component={BucadorMain} options={{headerShown:false}}/>
          <Tab.Screen name='mainChamba' component={MainMenu} options={{headerShown:false}}/>
          <Tab.Screen name='inbox' component={MainScreeninbox} options={{headerShown:false}}/>
  </Tab.Navigator>);
}

function flujoChamba(){
  <Stack.Navigator>
    {/* <Stack.Screen name='chamba' component={ChambaMenu}/> */}

  </Stack.Navigator>
}


