import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, Animated, Easing} from 'react-native';

export default () => {
  const [left] = useState(new Animated.Value(-500))
  const [opacity] = useState(new Animated.Value(0))
  const [bottom] = useState(new Animated.Value(-700))
  const [rotateValue] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(left, {
      duration: 1200,
      toValue: 0,  
    }).start(() => Animated.timing(opacity, {
        duration: 1200,
        toValue: 1,  
        }).start(() => Animated.timing(bottom, {
          duration: 1200,
          toValue: -250,  
          }).start(() => {
            Animated.loop(
              Animated.timing(rotateValue, {
                duration: 1200,
                toValue: 360,
                easing:  Easing.linear
              })
            ).start()
          })
        )
    )
  }, []) 

  const rotate = rotateValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  return (
    <SafeAreaView>
      <Animated.View style={[{position:"absolute" ,left: left, width:'100%'}]}>
        <Image  source={require('./banner.jpg')} 
                style={{width: '100%', height:280}} />
      </Animated.View>
      <Animated.Text style ={{color:'darkblue',opacity: opacity,marginTop: 300, fontSize: 19, paddingHorizontal: 16,}}>Taller de Animaciones Avanzadas en React Native. Besos.</Animated.Text>
      <Animated.View>
        <View style={{alignItems:'center'}}>
          <Animated.Image  
            source={require('./spinner.jpg')} 
            style={{width: 200, height:200, position:'absolute', bottom, transform: [{rotate:rotate}]}} 
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

