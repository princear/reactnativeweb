import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FullWidthOption = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default FullWidthOption;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#2073D3',
    width: wp(90),
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
