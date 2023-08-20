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

const PsychlogicalSixth = ({navigation}) => {
  const navigationPreviousFlow = () => {
    navigation.navigate('PsychlogicalFourth');
  };
  const navigationFlow = () => {
    navigation.navigate('Psychlogical14');
  };
  const [colorbox, setColorBox] = useState([
    {
      id: 1,
      image: require('../assets/icons/Group26086504.png'),
    },
    {
      id: 2,
      image: require('../assets/icons/Group26086505.png'),
    },
    {
      id: 3,
      image: require('../assets/icons/Group26086507.png'),
    },
    {
      id: 4,
      image: require('../assets/icons/Group26086502.png'),
    },
  ]);

  const [selectColor, setSelectColor] = useState('');

  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
        <HeaderComponent props="Prakriti Test" />
        <View style={{marginTop: 20}}>
          <ProgressBarContainer />
        </View>
        <View style={{marginTop: Platform.OS == 'web' ? '60%' : '60%'}}>
          <View style={{marginTop: 15, marginRight: 8}}>
            <QuestionText>
              Please select the correct pattern you previously memorized.
            </QuestionText>
          </View>
          <FlatList
            data={colorbox}
            numColumns={2}
            horizontal={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setSelectColor(item.id)}
                key={item.id}
                style={styles.boxWrapper}>
                <View
                  style={[
                    styles.boxWrapperCircle,
                    {
                      backgroundColor:
                        item.id == selectColor ? '#2073D3' : '#fff',
                    },
                  ]}
                />
                <Image
                  source={item.image}
                  style={styles.boxWrapperImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <BottomNavigation
          navigateData={navigationFlow}
          navigatePreviousData={navigationPreviousFlow}
        />
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
  headingContainer: {
    fontSize: 18,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 450,
    marginTop: 10,
  },
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingLeftImage: {
    height: 35,
    width: 35,
  },
  headingCenterImage: {
    height: 70,
    width: 70,
  },
  levelHeading: {
    fontSize: 17,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },
  boxWrapper: {flexDirection: 'row', marginTop: 20},
  boxWrapperCircle: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 50,
    borderColor: '#8C8C8C',
    marginLeft: 3,
  },
  boxWrapperImage: {height: 100, width: 100, marginLeft: 20, marginRight: 10},
});

export default PsychlogicalSixth;
