import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RadioOption = props => {
  return <Text style={styles.QuestionTextStyle}>{props.children}</Text>;
};

export default RadioOption;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    marginLeft: wp(2),
    fontSize: 14,
    color: '#323232',
    marginRight: wp(10),
    fontFamily: 'Poppins-Medium',
  },
});
