import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriEigthTest = ({navigation}) => {
  const [choice, setChoice] = useState('');

  const [presentation, setPresentatiomn] = useState([
    {
      id: 1,
      name: 'You did not want to patch up',
    },
    {
      id: 2,
      name: 'You didn’t accept their apology',
    },
    {
      id: 3,
      name: 'You wanted to patch up but hesitated',
    },
    {
      id: 4,
      name: 'You tried but they did not want to',
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriSeventhTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriSeventeenTest')
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
              source={require('../src/assets/icons/Character1.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{marginTop: 20, marginRight: 10}}>
            <QuestionText>
              What was the reason behind not fixing the broken relationship?
            </QuestionText>
          </View>

          <View style={{marginTop:10,alignSelf:'center'}}>
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
    height: 157,
    width: 151,
  },
 
});

export default PrakiriEigthTest;
