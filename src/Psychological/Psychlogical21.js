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

const Psychological21 = ({navigation}) => {
  const [mcqchoice, setMcqChoice] = useState('');
  const [presentation, setUsualDrink] = useState([
    {
      id: 1,
      name: '0-7',
    },
    {
      id: 2,
      name: '8-10',
    },
    {
      id: 3,
      name: 'More than 10',
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('Psychlogical20');
  };
  const navigationFlow = () => {
    navigation.navigate('Psychological22');
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
              marginTop: '20%',
              marginBottom: '20%',
            }}>
            <Image
              source={require('../../src/assets/icons/Character.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{marginTop: 15, marginRight: 10}}>
            <QuestionText>How many differences could you find?</QuestionText>
          </View>

          <View
            style={{
              marginTop: '2%',
            }}>
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

export default Psychological21;
