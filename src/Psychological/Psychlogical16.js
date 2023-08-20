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

const Psychlogical16 = ({navigation}) => {
  const [click, setClick] = useState('');
  const [mcqchoice, setMcqChoice] = useState('');

  const [presentation, setUsualDrink] = useState([
    {
      id: 1,
      name: "They don't pay attention",
    },
    {
      id: 2,
      name: 'They listen a little',
    },
    {
      id: 3,
      name: 'They listen, offer comfort, and care',
    },
    {
      id: 4,
      name: 'They really listen and support',
    },
  ]);

  const navigationPreviousFlow = () => {
    navigation.navigate('PsychlogicalSixth');
  };
  const navigationFlow = () => {
    navigation.navigate('Psychlogical17');
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
              source={require('../../src/assets/icons/Group26086731.png')}
              style={styles.headingCenterImage}
            />
          </View>

          <View style={{marginTop: 30, marginBottom: 25, marginRight: 10}}>
            <QuestionText>
              You share a problem with your friend. How do they respond?
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
});

export default Psychlogical16;
