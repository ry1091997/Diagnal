//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {widthToDp} from '../Config/Responsive';
import * as Icons from '../Shared/Icons';

// create a component
const ItemCard = ({imageName, itemName}) => {
  return (
    <View style={styles.container}>
      {Icons?.[imageName] ? (
        <Image source={Icons?.[imageName]} style={styles.imageStyle} />
      ) : (
        <Image
          source={Icons?.icon_name_placeholder}
          style={styles.imageStyle}
        />
      )}
      <View style={{marginTop: widthToDp(1.5), width: widthToDp(29)}}>
        <Text style={styles.textStyle} numberOfLines={1}>
          {itemName}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  imageStyle: {
    width: widthToDp(31),
    height: widthToDp(50),
    resizeMode: 'contain',
  },
  textStyle: {
    color: '#fff',
    fontSize: widthToDp(4),
    alignItems: 'flex-start',
  },
});

//make this component available to the app
export default ItemCard;
