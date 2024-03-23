//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MainStack} from '../Router/StackNav';

// create a component
const Welcome = () => {
  return <MainStack />;
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Welcome;
