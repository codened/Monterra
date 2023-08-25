import React from 'react';
import { View, Text, Image, ProgressBarAndroid, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('src//assets//images//University_of_Moratuwa_logo.png')} style={styles.logo} />
      <Text style={styles.companyName}>Data Science Project</Text>
      <Text style={styles.companyName}>Group 08</Text>
      <ProgressBarAndroid styleAttr="Horizontal" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain', // Adjust the image resize mode as needed
  },
  companyName: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
