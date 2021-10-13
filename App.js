import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
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
        title="Tap Me For Alert"
        onPress={() => alert('Button pressed')}
      />
      <Button 
        title="Tap Me For Alert With Buttons"
        onPress={() => Alert.alert('My title', 'My message', [
          {text: 'Yes', onPress: () => console.log('Yes')},
          {text: 'No', onPress: () => console.log('No')}
        ])}
      />
      <Button 
        title="Tap Me For Alert With Prompt"
        color='green'
        onPress={() => Alert.prompt('My title', 'My message', (text) => console.log(text))} // only works on iOS
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'lightgrey' };

const styles = StyleSheet.create({ // this method validates the properties we pass (will throw error if misspelled, etc., instead of just using a regular javascript object)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
