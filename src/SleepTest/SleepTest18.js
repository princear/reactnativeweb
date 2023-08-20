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
import StressHeaderComponent from '../Component/StressHeaderComponent';
import ProgressBarContainer from '../Component/ProgressBar';
import QuestionText from '../Component/QuestionText';
import BottomNavigation from '../Component/BottomNavigation';
import McqComponent from '../Component/McqComponent';
import SubHeading from '../Component/SubHeading';
import SliderComponent from '../Component/SliderComponent';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const SleepTest18 = ({navigation}) => {
  const [click, setClick] = useState('');
  const [mcqchoice, setMcqChoice] = useState('');

  const navigationPreviousFlow = () => {
    navigation.navigate('SleepTest17');
  };
  const navigationFlow = () => {
    navigation.navigate('TestScreen');
  };

  const clickedButtonHandler = value => {
    setClick(value);
  };
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
        <StressHeaderComponent props="Sleep Test" />
        <View style={{marginTop: 20}}>
          <ProgressBarContainer />
        </View>

        <View>
          <View style={{alignItems: 'center', marginTop: '20%'}}>
            <Image
              source={require('../../src/assets/icons/21118463_64285371.png')}
              style={styles.headingCenterImage}
            />
          </View>

          <View
            style={{marginTop: '15%', marginBottom: '15%', marginRight: 10}}>
            <QuestionText>
              How much of a problem has it been for you to keep up enough
              enthusiasm to get things done?
            </QuestionText>
            <SubHeading>Please answer considering the past month</SubHeading>
          </View>

          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                textAlign: 'center',
                color: '#2073D3',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              No problem at all
            </Text>
            <SliderComponent />
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  textAlign: 'center',
                  color: '#666565',
                  fontSize: 10,
                  textTransform: 'uppercase',
                }}>
                No problem at all
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  textAlign: 'center',
                  fontSize: 10,
                  color: '#666565',
                  textTransform: 'uppercase',
                }}>
                A very big problem
              </Text>
            </View>
          </View>
          <BottomNavigation
            navigateData={navigationFlow}
            navigatePreviousData={navigationPreviousFlow}
          />
        </View>
      </View>
      {/* <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PsychlogicalThird')}>
                        <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '60%' }}>

                    <Image source={require('../assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>You need to pick an outfit for a special event tonight, but you have many options. Do you:</Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' ,marginTop:20}}>
                        {
                            usualDrink.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[styles.buttonWrapper, { backgroundColor: click == item.name? '#2073D3' : '#fff', }]} onPress={(e) => clickedButtonHandler(item.name)}>
                                        <Text style={[styles.buttonText, { color: click == item.name ? '#fff' : '#2073D3' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                </View>
            </View> */}
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
  buttonWrapper: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#2073D3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    width: '30%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2073D3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default SleepTest18;
