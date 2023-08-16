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
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import ButtonFullWidth from './Component/ButtonFullWidth';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriEvelvenTest = ({ navigation }) => {
  const [choice, setChoice] = useState('')


    const pressedButton = (value) => {
        setChoice(value);

    }
    const navigationPreviousFlow = () => {
      navigation.navigate('PrakiriThirdTest')
  }
  const navigationFlow = () => {
      navigation.navigate('PrakiriTwelveTest')
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
          <ButtonFullWidth choice={choice} clickedButtonHandler={pressedButton} />

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
    width: 240,
    resizeMode: 'contain',
  },
 

 
});

export default PrakiriEvelvenTest;
