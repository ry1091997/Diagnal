//import liraries
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
// import * as Icons from '../Common/icon';

// create a component
const ImageComponent = ({
  style,
  url,
  resizeMode = 'contain',
  // defaultImage
}) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={style}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode[resizeMode]}
        onError={err => console.log('image load error', err)}
        // defaultSource={defaultImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ImageComponent;
