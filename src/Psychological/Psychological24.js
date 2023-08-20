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

const Psychological24 = ({navigation}) => {
  const [mcqchoice, setMcqChoice] = useState('');
  const [presentation, setUsualDrink] = useState([
    {
      id: 1,
      name: 'Ready',
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('Psychlogical23');
  };
  const navigationFlow = () => {
    navigation.navigate('Psychological25');
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
          <View
            style={{
              alignItems: 'center',

              marginBottom: '20%',
            }}>
            {/* <Image
              source={require('../../src/assets/icons/1000_F_113732475_mb3ywGxe04cx58Kexm4jM4N0uq3707vd-transformed1.png')}
              style={styles.headingCenterImage}
            /> */}
          </View>
          <View
            style={{
              marginTop: 15,
              marginRight: 10,
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#919191',
                fontSize: 40,
                fontFamily: 'Poppins-Regular',
              }}>
              03:00:00
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: '10%',
              marginBottom: '5%',
            }}>
            <Image
              source={require('../../src/assets/icons/Group26086548.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <BottomNavigation
            navigateData={navigationFlow}
            navigatePreviousData={navigationPreviousFlow}
          />
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

export default Psychological24;
