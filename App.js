import React from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet, View, } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // console.log(Dimensions.get('screen')); // does not respond to orientation changes
  // console.log(useDimensions()); // does respond to orientation changes
  console.log(useDeviceOrientation());

  return (
    // SafeAreaView only works for iOS
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%',
      }}></View>
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
