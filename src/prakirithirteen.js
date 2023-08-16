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
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import McqComponent from './Component/McqComponent';
import QuestionText from './Component/QuestionText';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriThirteenTest = ({ navigation }) => {
  const [choice, setChoice] = useState('');

  const [presentation, setPresentatiomn] = useState([
    {
      id: 1,
      name: 'No, I would decline',
    },
    {
      id: 2,
      name: `Maybe, I'm not sure`,
    },
    {
      id: 3,
      name: `I'd be interested but hesitant`,
    },
    {
      id: 4,
      name: `Yes, I'd fearlessly jump with them`,
    },
  ]);
  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriFifthTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriFourteenTest')
  }
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
              source={require('../src/assets/icons/image138.png')}
              style={styles.headingCenterImage}
            />
          </View>
          <View style={{ marginTop: 15, marginRight: 10 }}>
            <QuestionText> Your friends suggest bungee jumping, but you're afraid of heights.
              Would you join them?</QuestionText>
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
    height: 170,
    width: 170,
    resizeMode: 'contain',
  },
 
 

});

export default PrakiriThirteenTest;
