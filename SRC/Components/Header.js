//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {widthToDp} from '../Config/Responsive';
import ImageComponent from './ImageComponent';
import * as Icons from '../Shared/Icons';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const Header = ({headerText, onPressSearch, showOnlyText, _onBackClick}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Icons?.icon_name_nav_bar}
        resizeMode="cover"
        style={styles.imageBack}>
        {showOnlyText ? (
          <View style={styles.headerWrapper}>
            {headerText && <Text style={styles.text}>{headerText}</Text>}
          </View>
        ) : (
          <View style={styles.mainWrapper}>
            <View style={styles.subWrapper}>
              <TouchableOpacity
                onPress={() => {
                  _onBackClick();
                }}>
                <Image
                  source={Icons?.icon_name_back}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>

              {headerText && <Text style={styles.text}>{headerText}</Text>}
            </View>
            <TouchableOpacity
              onPress={() => {
                onPressSearch();
              }}>
              <Image
                source={Icons?.icon_name_search}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: widthToDp(15),
  },
  imageBack: {
    justifyContent: 'center',
    height: '100%',
  },
  headerWrapper: {
    alignItems: 'center',
    paddingHorizontal: widthToDp(4),
  },
  text: {color: '#fff', fontSize: widthToDp(4.5)},
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthToDp(4),
  },
  subWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthToDp(50),
  },
  imageStyle: {
    tintColor: '#fff',
    width: widthToDp(5),
    height: widthToDp(5),
  },
});

//make this component available to the app
export default Header;
