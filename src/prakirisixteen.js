import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
 
} from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriSixteenTest = ({navigation}) => {
  const [choice, setChoice] = useState('');

  const [presentation, setPresentatiomn] = useState([
    {
      id: 1,
      name: `No, I'd stay quiet to avoid trouble`,
    },
    {
      id: 2,
      name: `Maybe, I'm not sure`,
    },
    {
      id: 3,
      name: `Yes, I'd be willing to talk discreetly`,
    },
    {
      id: 4,
      name: `Yes, I'd boldly support coworker`,
    },
  ]);

  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriFifteenTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriSixthTest')
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
              source={require('../src/assets/icons/Group26086710.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{marginTop: 15, marginRight: 10}}>
            <QuestionText>
              Your co-worker is unfairly blamed for someone else's mistake.
              Speaking up might put you in an awkward position. Would you
              support and clarify the situation?
            </QuestionText>
          </View>

          <View style={{}}>
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
    height: 113,
    width: 191,
  },

  
});

export default PrakiriSixteenTest;
