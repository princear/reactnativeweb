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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomNavigation from './Component/BottomNavigation';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import SubHeading from './Component/SubHeading';

const PrakiriSixthTest = ({ navigation }) => {
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      image: require('../src/assets/icons/Group26086463-1.png'),
    },
    {
      id: 2,
      image: require('../src/assets/icons/Group26086461.png'),
    },
    {
      id: 3,
      image: require('../src/assets/icons/Group26086455.png'),
    },
    {
      id: 4,
      image: require('../src/assets/icons/Group26086457.png'),
    },
    {
      id: 5,
      image: require('../src/assets/icons/Group26086460.png'),
    },
    {
      id: 6,
      image: require('../src/assets/icons/Group26086458.png'),
    },
    {
      id: 7,
      image: require('../src/assets/icons/Group26086462.png'),
    },
    {
      id: 8,
      image: require('../src/assets/icons/Group26086456.png'),
    },
  ]);

  const [drinkSelect, setDrinkSelect] = useState('0');

  const navigationPreviousFlow = () => {
    navigation.navigate('PrakiriSixteenTest')
  }
  const navigationFlow = () => {
    navigation.navigate('PrakiriSeventhTest')
  }
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{ marginLeft: 10 }}>
        <HeaderComponent props='Prakriti Test' />

        <View style={{ marginTop: 20 }}>
          <ProgressBarContainer />
        </View>
        <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '40%' }}>
          <View style={{ marginTop: 15, marginRight: 10 }}>
            <QuestionText>
              In moderate temperatures, what do you prefer to have:
            </QuestionText>
            <SubHeading >
              (Moderate temperature: Neither too hot, nor too cold; ideal
              temperature such as 250 C)
            </SubHeading>
          </View>
        </View>
        <View style={{ paddingBottom: 10, marginTop: 10 }}>
          <FlatList
            data={drinks}
            numColumns={4}
            horizontal={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setDrinkSelect(item.id)}
                key={item.id}
                style={[
                  styles.boxWrapper,
                  { borderColor: item.id == drinkSelect ? '#3460D7' : '#8F8F8F' },
                ]}>
                <Image
                  source={item.image}
                  style={styles.wrappImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <BottomNavigation navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />

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
    fontSize: 16,
    color: '#363636',
    fontFamily: 'Poppins-SemiBold',
  },
  levelSubHeading: {
    color: '#868686',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'justify',
    fontFamily: 'Poppins-Regular',
  },
  wrappImage: {
    height: 90,
    width: 60,
  },
  boxWrapper: {
    height: 120,
    width: wp(20),
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  progressBarOuterWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 6,
  },
  
});

export default PrakiriSixthTest;
