//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthToDp} from '../Config/Responsive';
import Config from '../Config/Config';

// create a component
const TextInputComponent = ({
  _onChangeText,
  placeholder,
  placeholderTextColor,
  autoFocus,
  showClearBUtton,
  _onClickClearButton,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={text => _onChangeText(text)}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoFocus={autoFocus}
        />

        {showClearBUtton && (
          <TouchableOpacity onPress={() => _onClickClearButton()}>
            <Text
              style={{
                color: '#fff',
                fontSize: widthToDp(6),
                fontWeight: 'bold',
              }}>
              X
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: widthToDp(15),
    padding: widthToDp(2),
    paddingRight: widthToDp(4),
    borderWidth: widthToDp(0.5),
    borderColor: Config?.refresh_color,
    borderRadius: widthToDp(2),
    color: '#fff',
  },
  input: {
    color: '#fff',
    width: '90%',
    fontSize: widthToDp(4),
  },
});

//make this component available to the app
export default TextInputComponent;
