import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OptionHeading = props => {
  return <Text style={styles.QuestionTextStyle}>{props.children}</Text>;
};

export default OptionHeading;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    fontSize: 14,
    color: '#363636',
    fontFamily: 'Poppins-SemiBold',
  },
});
