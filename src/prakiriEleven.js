import React, { useState } from 'react';
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
  Animated,
} from 'react-native';
import QuestionText from './Component/QuestionText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SubHeading from './Component/SubHeading';
import FullWidthOption from './Component/FullWidthOption';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';

const PrakiriEvelvenTest = ({ navigation }) => {
  const [choice, setChoice] = useState('');

  const clickedButtonHandler = value => {
    setChoice(value);
  };
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{ marginLeft: 10 }}>
        <HeaderComponent props='Prakriti Test' />

        <View style={{ marginTop: 20 }}>
          <ProgressBarContainer />
        </View>
        <View>
          <View style={{ alignItems: 'center', marginTop: '10%' }}>
            <Image
              source={require('../src/assets/icons/Group26086704.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{ marginTop: '10%', marginRight: 10 }}>
            <QuestionText>
              Can you speak at length on any topic of your choice?
            </QuestionText>
            <SubHeading>
              (Topics such as pollution, politics, hobbies, equality etc)
            </SubHeading>

          </View>

          <View style={{ marginTop: 20 }}>
            <FullWidthOption
              style={[
                styles.buttonWrapper,
                { backgroundColor: choice == 'Yes' ? '#2073D3' : '#fff' },
              ]}
              onPress={e => clickedButtonHandler('Yes')}>
              <Text
                style={[
                  styles.buttonText,
                  { color: choice == 'Yes' ? '#fff' : '#2073D3' },
                ]}>
                Yes
              </Text>
            </FullWidthOption>
            <TouchableOpacity
              style={[
                styles.buttonWrapper,
                { backgroundColor: choice == 'No' ? '#2073D3' : '#fff' },
              ]}
              onPress={() => clickedButtonHandler('No')}>
              <Text
                style={[
                  styles.buttonText,
                  { color: choice == 'No' ? '#fff' : '#2073D3' },
                ]}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    height: 170,
    width: 240,
    resizeMode: 'contain',
  },
  levelHeading: {
    fontSize: 16,
    color: '#363636',
    fontFamily: 'Poppins-SemiBold',
  },
  levelSubHeading: {
    color: '#868686',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'Poppins-Medium',
    marginRight: 5,
  },
  buttonText: {
    color: '#2073D3',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  buttonWrapper: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#2073D3',
    width: wp(90),
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarOuterWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 6,
  },
  progressPercentWrapper: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#B0B0B0',
  },
  rightWrapper: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  rightImage: { height: 15, width: 15 },
  minutesTextWrapper: {
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    color: '#B0B0B0',
    marginLeft: 5,
  },
  progressBar: {
    height: 10,
    width: '98%',
    borderColor: '#BFD3EF',
    borderWidth: 2,
    borderRadius: 10,
  },
  progressData: {
    backgroundColor: '#2073D3',
    width: '5%',
    borderRadius: 10,
  },
});

export default PrakiriEvelvenTest;
