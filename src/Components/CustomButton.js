import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import { moderateScale ,textScale,moderateScaleVertical} from '../Styles/Responsive';
import Colors from '../Styles/Colors';


const CustomButton = ({onPress = () => {}, text = '', textStyle = {},style={}}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.Container, style]}
        onPress={onPress}>
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.orangeColor,
    height: moderateScale(52),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(12),
    margin: moderateScale(30),
  
  },
  textStyle: {
    fontSize: textScale(16),
    color: 'white',
    fontWeight: '700',
    textAlign:'center',
  },
});