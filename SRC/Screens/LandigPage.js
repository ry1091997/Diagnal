//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import Config from '../Config/Config';
import {widthToDp} from '../Config/Responsive';

// create a component
const LandingPage = props => {
  return (
    <View style={styles.container}>
      <Header headerText={Config?.appName} showOnlyText={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: 'red', padding: widthToDp(2)}}
          onPress={() => props.navigation.navigate('home')}>
          <Text style={{color: '#fff', fontSize: widthToDp(4.5)}}>
            Diagnal AssignMent
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

//make this component available to the app
export default LandingPage;
