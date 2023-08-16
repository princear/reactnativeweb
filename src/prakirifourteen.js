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

const PrakiriFourteenTest = ({navigation}) => {
  const [choice, setChoice] = useState('');

  const [presentation, setPresentatiomn] = useState([
    {
      id: 1,
      name: `No, I prefer not to talk about it`,
    },
    {
      id: 2,
      name: `Maybe, I might share some`,
    },
    {
      id: 3,
      name: `Yes, I'd be willing to open up a bit`,
    },
    {
      id: 4,
      name: `Yes, I won’t be afraid to speak my mind`,
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriThirteenTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriFifteenTest')
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
              source={require('../src/assets/icons/cuate.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{marginTop: 15, marginRight: 10}}>
            <QuestionText>
              You're going through tough times, and a friend offers support if
              you open up. Would you share your feelings with them?
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
    width: 170,
    resizeMode: 'contain',
  },


 
});

export default PrakiriFourteenTest;
