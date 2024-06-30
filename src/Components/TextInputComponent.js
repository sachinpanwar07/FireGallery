import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import { moderateScale,textScale,moderateScaleVertical } from '../Styles/Responsive';
const TextInputComponent = ({
  value = '',
  onChangeText,
  placeholder = '',
  secureText = false,
  onPressSecure = () => {},
  inputStyle = {},
  textStyle = {},
  placeholderTextColor ,
  imageSource,
  backgroundColor,
  ...props
}) => {
  return (
    <View
      style={{
        ...styles.inputStyle,
        ...inputStyle,
        backgroundColor: backgroundColor
      }}>
      <View style={styles.container}>
      {imageSource && (
          <Image source={imageSource} style={styles.imageiconStyle} />
        )}
        <TextInput
          style={{...styles.textStyle}}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          {...props}
        />
      </View>

    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(52),
    margin: moderateScale(20),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
   
    marginBottom: moderateScale(16),

  },
  textStyle: {
    fontSize: textScale(14),
    flex: 1,
    color:Colors.blackColor
  },
  imageiconStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginRight: moderateScale(10),
    resizeMode:'cover',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});