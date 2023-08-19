import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SubHeading = props => {
  return <Text style={styles.QuestionTextStyle}>{props.children}</Text>;
};

export default SubHeading;

const styles = StyleSheet.create({
  QuestionTextStyle: {
    color: '#868686',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'Poppins-Medium',
    //  marginRight: 5,
  },
});
