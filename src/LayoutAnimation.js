import React, {useState} from 'react';
import {View, Text, StyleSheet,SafeAreaView, LayoutAnimation, TouchableOpacity, Platform, UIManager} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default () => {
  const [animate, setAnimate] = useState(false);

  const Animate = () => {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          500,
          LayoutAnimation.Types.easeIn,
          LayoutAnimation.Properties.scaleXY,
        ),
    );
    setAnimate(!animate);
  }
  return (
    <SafeAreaView style={{flex:1, alignItems:'center'}}>  
      <View style={styles.container}>
      {animate &&
        <View style={styles.view1}><Text>1</Text></View>
      }
        <View style={styles.view2}><Text>2</Text></View>
      {animate &&  
        <View style={styles.view3}><Text>3</Text></View>
      }
        <View style={styles.view4}><Text>4</Text></View>
      </View>
      <TouchableOpacity onPress={Animate} style={styles.button}>
        <Text style={styles.textButton}>Animame!!!!</Text>
      </TouchableOpacity>
      </SafeAreaView>  
  
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:200
  },
  view1: {
    backgroundColor:'blue',
    flex:1
  },
  view2: {
    backgroundColor:'cyan',
    flex:1
  },
  view3: {
    backgroundColor:'violet',
    flex:1
  },
  view4: {
    backgroundColor:'lightgreen',
    flex:1
  },
  button: {
    backgroundColor: 'blue',
    padding: 16,
    fontSize: 20,
    borderRadius:50,
    position:'absolute',
    bottom:16,
    alignItems:'center',
    width:'90%'
  },
  textButton: {
    textAlign:'center',
    color: 'white',
  }
}); 

