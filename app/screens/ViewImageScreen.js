import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <Image 
        style={styles.image}
        source={require('../assets/chair.jpg')} 
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImageScreen;