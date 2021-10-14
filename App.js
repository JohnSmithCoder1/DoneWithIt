import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    // SafeAreaView only works for iOS
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'lightgrey' };

const styles = StyleSheet.create({ // this method validates the properties we pass (will throw error if misspelled, etc., instead of just using a regular javascript object)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
