import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const QuestionText = (props) => {
  return <Text style={styles.QuestionTextStyle}>{props.children}</Text>;
};

export default QuestionText;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    fontSize: 16,
    color: '#363636',
    fontFamily: 'Poppins-SemiBold',
  },
});
