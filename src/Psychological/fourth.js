import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  Pressable,
  Alert,
} from 'react-native';
import HeaderComponent from '../Component/HeaderComponent';
import ProgressBarContainer from '../Component/ProgressBar';
import QuestionText from '../Component/QuestionText';
import BottomNavigation from '../Component/BottomNavigation';
import McqComponent from '../Component/McqComponent';
import SubHeading from '../Component/SubHeading';
const PsychlogicalFourth = ({navigation}) => {
  const navigationPreviousFlow = () => {
    navigation.navigate('PsychlogicalFourth');
  };
  const navigationFlow = () => {
    navigation.navigate('PsychlogicalSixth');
  };
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
        <HeaderComponent props="Prakriti Test" />
        <View style={{marginTop: 20}}>
          <ProgressBarContainer />
        </View>
        <View style={{marginTop: Platform.OS == 'web' ? '60%' : '60%'}}>
          <View style={{marginTop: 15, marginRight: 8}}>
            <QuestionText>Memorize the color pattern carefully.</QuestionText>

            <View style={styles.boxWrapper}>
              <Image
                source={require('../assets/icons/Group26086502.png')}
                style={styles.boxImage}
              />
            </View>
          </View>
        </View>
        <BottomNavigation
          navigateData={navigationFlow}
          navigatePreviousData={navigationPreviousFlow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  headingContainer: {
    fontSize: 18,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 450,
    marginTop: 10,
  },
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingLeftImage: {
    height: 35,
    width: 35,
  },
  headingCenterImage: {
    height: 70,
    width: 70,
  },
  levelHeading: {
    fontSize: 18,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },

  boxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
  },
  boxImage: {
    height: 140,
    width: 140,
  },
});

export default PsychlogicalFourth;
