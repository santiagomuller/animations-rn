import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer, Navigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LayoutAnimation from './LayoutAnimation';
import AnimatedApi from './AnimatedApi';

const Home = ({navigation}) => {
  return (
    <View style={{justifyContent:'space-between', marginBottom:25,flex:1}}>
      <Text style={{fontSize:20, paddingHorizontal: 16, marginVertical:16}}>Este es un Tema AVANZADO para HeavyUsers</Text>
      <View>
        <TouchableOpacity style={{marginBottom: 16, alignItems:'center'}} onPress={() => navigation.navigate('LayoutAnimation')}>  
        <View style={{borderRadius:50, backgroundColor:'purple',  width:'90%',}}>    
            <Text style={{fontSize:18, textAlign:'center', color:'white', width:'90%', padding:16}}>LayoutAnimation</Text>  
          </View>
        </TouchableOpacity>  
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('AnimatedView')}>
          <View style={{borderRadius:50, backgroundColor:'crimson',  width:'90%'}}>  
            <Text style={{fontSize:18, textAlign:'center',color:'white', padding:16}}>Animated API</Text>  
          </View>  
        </TouchableOpacity>  
      </View>
    </View>
  );
};
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  LayoutAnimation: {screen: LayoutAnimation},
  AnimatedView: {screen: AnimatedApi}
});


const App = createAppContainer(MainNavigator)

export default App;