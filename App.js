import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello Ubiquisoft</Text>
      <TouchableOpacity>
        <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log('Image pressed')}>
        <Image 
          blurRadius={10}
          fadeDuration={2000} // only works on Android
          source={{ 
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300' 
          }} 
        />
      </TouchableWithoutFeedback>
      <Button 
        title="Tap Me"
        onPress={() => alert('Button pressed')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
