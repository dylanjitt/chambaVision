import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Header from '../buttons/header';

export default function Perfil(){
    return(
        <View style={styles.body}>
            <View >
                <View style={{flexDirection: 'row',  alignItems:'center',marginBottom:25}}>
                    <TouchableOpacity style={{marginLeft:80,width:161,height:161, borderRadius:100,backgroundColor:'#78919d20',alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:128,height:128, borderRadius:100,backgroundColor:'#fafafa',alignItems:'center',justifyContent:'center'}}>
                        {/*
                        imagen del usuario
                        */}
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20, alignItems:'flex-start' }}> 
                        <Text style={styles.titleHeader}>Luis Andres Paricollo Parra</Text>
                        <Text style={styles.subtitle}>CI: 616237</Text>
                    </View>
                </View>
                <View >
                    <View style={{flexDirection: 'row',  alignItems:'flex-start',marginBottom:25}}>
                        <View style={{width:50,height:50, borderRadius:100,backgroundColor:'#25D366',alignItems:'center',justifyContent:'center'}}>
                            {/*
                            imagen del usuario
                            */}
                        </View>
                        <Text style={styles.subtitle}>+591 79126364</Text>
                    </View>
                    <View style={{flexDirection: 'row',  alignItems:'center',marginBottom:25}}>
                        <View style={{width:50,height:50, borderRadius:100,backgroundColor:'#ADD8E6',alignItems:'center',justifyContent:'center'}}>
                            {/*
                            imagen del usuario
                            */}
                        </View>
                        <Text style={styles.subtitle}>email</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row',alignItems:"center"}}>
                <View style={{  alignItems:'center' }}> 
                    <Text style={styles.titleHeader}>Luis Andres Paricollo Parra</Text>
                    <Text style={styles.subtitle}>CI: 616237</Text>
                </View>
                <View style={{  alignItems:'center' }}> 
                    <Text style={styles.titleHeader}>Luis Andres Paricollo Parra</Text>
                    <Text style={styles.subtitle}>CI: 616237</Text>
                </View>
            </View>
            <Button title='boton'>
                Botton
            </Button>
        </View>

    )
}

const styles = StyleSheet.create(
    {
      body:{
        flex:1,
        backgroundColor:'#eaeaea',
        justifyContent:'center',
        alignItems:'center'
      },
      view:{
        justifyContent:'center',
        alignItems:'center',
      },
      view2:{
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:25,
      },
      view3:{
        flex:1,
        height:40,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
      },
      viewBusqueda: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width:400,
        height:65,
        paddingLeft:8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        borderRadius:15,
        borderWidth:2,
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
        width:325,
        height: 5,
        backgroundColor: '#ffff',
      },
      underline: {
        width: 310,
        height: 2, 
        backgroundColor: '#000000', 
        marginTop: 0, 
      },
      titleHeader:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',
        flexWrap: 'wrap',
        maxWidth: '70%' // Limitar el ancho máximo del contenedor
      },
      subtitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fafafa'
      }
    }
  )