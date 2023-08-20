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

const PsychlogicalFirst = ({navigation}) => {
  const [click, setClick] = useState('');
  const [mcqchoice, setMcqChoice] = useState('');

  const [presentation, setUsualDrink] = useState([
    {
      id: 1,
      name: 'Choose your usual drink',
    },
    {
      id: 2,
      name: 'Ask the server for recommendation',
    },
    {
      id: 3,
      name: 'Spend time on browsing, still unsure',
    },
  ]);

  const navigationPreviousFlow = () => {
    navigation.navigate('TestScreen');
  };
  const navigationFlow = () => {
    navigation.navigate('PsychlogicalSecond');
  };

  const clickedButtonHandler = value => {
    setClick(value);
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
          <View style={{alignItems: 'center', marginTop: '10%'}}>
            <Image
              source={require('../../src/assets/icons/Group26086712.png')}
              style={styles.headingCenterImage}
            />
          </View>

          <View style={{marginTop: 30, marginBottom: 25, marginRight: 10}}>
            <QuestionText>
              You're at a coffee shop, and you can't decide what to order. Do
              you:
            </QuestionText>
          </View>

          <View>
            <McqComponent
              presentationData={presentation}
              mcqchoice={mcqchoice}
              setMcqChoice={setMcqChoice}
            />
          </View>
          <BottomNavigation
            navigateData={navigationFlow}
            navigatePreviousData={navigationPreviousFlow}
          />
        </View>
        {/* 
        <View style={{marginTop: Platform.OS == 'web' ? '60%' : '60%'}}>
          <Image
            source={require('../assets/icons/Group54.png')}
            style={styles.headingCenterImage}
          />
          <View style={{marginTop: 15, marginRight: 10}}>
            <Text style={styles.levelHeading}>
              You're at a coffee shop, and you can't decide what to order. Do
              you:
            </Text>
          </View>

          <View style={{alignItems: 'flex-end', marginTop: 20}}>
            {usualDrink.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.buttonWrapper,
                    {backgroundColor: click == item.name ? '#2073D3' : '#fff'},
                  ]}
                  onPress={e => clickedButtonHandler(item.name)}>
                  <Text
                    style={[
                      styles.buttonText,
                      {color: click == item.name ? '#fff' : '#2073D3'},
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
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

export default PsychlogicalFirst;
