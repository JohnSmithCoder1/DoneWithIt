import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello Ubiquisoft</Text>
      <Image source={require('./assets/favicon.png')} />
      <Image 
        blurRadius={10}
        fadeDuration={2000} // only works on Android
        source={{ 
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300' 
        }} 
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
