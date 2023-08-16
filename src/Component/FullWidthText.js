import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FullWidthText = props => {
  return <Text style={props.style}>{props.children}</Text>;
};

export default FullWidthText;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    color: '#2073D3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
