//import liraries
import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Config from '../Config/Config';
import Welcome from './Welcone';

// create a component
const Splash = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Config?.status_bar_back_ground_color}
      />
      <Welcome />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Splash;
