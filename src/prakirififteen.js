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
  Animated,
} from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';
import QuestionText from './Component/QuestionText';

const PrakiriFifteenTest = ({navigation}) => {
  const [choice, setChoice] = useState('');

  const [presentation, setPresentatiomn] = useState([
    {
      id: 1,
      name: `I'd stick with the people I know`,
    },
    {
      id: 2,
      name: `Maybe, I'm not sure`,
    },
    {
      id: 3,
      name: `Yes, I'd be willing to introduce myself`,
    },
    {
      id: 4,
      name: `Yes, I'd boldly mingle and make friends`,
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriFourteenTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriSixteenTest')
  }
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
      <HeaderComponent props='Prakriti Test' />

        <View style={{marginTop: 20}}>
        <ProgressBarContainer />
        </View>
        <View>
          <View style={{alignItems: 'center', marginTop: '10%'}}>
            <Image
              source={require('../src/assets/icons/image139.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{marginTop: 15, marginRight: 10}}>
            <QuestionText>
              You're at a party where you know only a few people. How likely are
              you to approach and talk to new people?
            </QuestionText>
          </View>

          <View>
            <McqComponent presentationData={presentation} mcqchoice={choice} setMcqChoice={setChoice} />
          </View>
          <BottomNavigation navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />

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
    height: 170,
    width: 250,
  },
 
});

export default PrakiriFifteenTest;
