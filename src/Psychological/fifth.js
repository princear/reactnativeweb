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

const PsychlogicalFifth = ({navigation}) => {
  const navigationPreviousFlow = () => {
    navigation.navigate('PsychlogicalNewFifth');
  };
  const navigationFlow = () => {
    navigation.navigate('PsychlogicalThird');
  };

  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
        <HeaderComponent props="Prakriti Test" />
        <View style={{marginTop: 20}}>
          <ProgressBarContainer />
        </View>
        <View>
          <View style={{alignItems: 'center', marginTop: '10%', height: '25%'}}>
            {/* <Image
              source={require('../assets/icons/icon_playcircle_filled.png')}
              style={styles.headingCenterImage}
            /> */}
          </View>

          <View style={{marginTop: 30, marginBottom: 25, marginRight: 10}}>
            <QuestionText>
              Listen to the audio clip carefully and choose the correct option.
            </QuestionText>
            <SubHeading>
              Tap on Play icon to listen to the audio. You will be able to
              listen to this audio recording once only.
            </SubHeading>

            <View style={{alignItems: 'center', marginTop: '10%'}}>
              <Image
                source={require('../assets/icons/icon_playcircle_filled.png')}
                style={styles.headingCenterImage}
              />
            </View>
          </View>

          <BottomNavigation
            navigateData={navigationFlow}
            navigatePreviousData={navigationPreviousFlow}
          />
        </View>

        {/* <View style={{marginTop: Platform.OS == 'web' ? '60%' : '60%'}}>
          <View style={{marginTop: 15, marginRight: 8}}>
            <Text style={styles.levelHeading}>
              Listen to the audio clip carefully and choose the correct option.
            </Text>
            <Text style={styles.levelSubHeading}>
              Tap on Play icon to listen to the audio. You will be able to
              listen to this audio recording once only.
            </Text>

            <View style={styles.boxWrapper}>
              <Image
                source={require('../assets/icons/icon_playcircle_filled.png')}
                style={styles.boxImage}
              />
            </View>

            <Text style={styles.laterText}>I will do this one later.</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 450,
    marginTop: 10,
  },

  headingCenterImage: {
    // height: 170,
    // width: 170,
    resizeMode: 'contain',
  },
});

export default PsychlogicalFifth;
