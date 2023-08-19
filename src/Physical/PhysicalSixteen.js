import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomNavigation from '../Component/BottomNavigation';
import HeaderComponent from '../Component/HeaderComponent';
import ProgressBarContainer from '../Component/ProgressBar';
import QuestionText from '../Component/QuestionText';

const PysicalSixteen = ({ navigation }) => {
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      image: require('../assets/icons/Group26086657.png'),
    },
    {
      id: 2,
      image: require('../assets/icons/Group26086658.png'),
    },
    {
      id: 3,
      image: require('../assets/icons/Group26086659.png'),
    },
    {
      id: 4,
      image: require('../assets/icons/Group26086660.png'),
    },
    {
      id: 5,
      image: require('../assets/icons/Group26086661.png'),
    },
    {
      id: 6,
      image: require('../assets/icons/Group26086662.png'),
    },
    {
      id: 7,
      image: require('../assets/icons/Group26086663.png'),
    },
    {
      id: 8,
      image: require('../assets/icons/Group26086664.png'),
    },
  ]);

  const [drinkSelect, setDrinkSelect] = useState('0');

  const navigationPreviousFlow = () => {
    navigation.navigate('PhysicalFifteen')
  }
  const navigationFlow = () => {
    navigation.navigate('PhysicalSeventeen')
  }
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{ marginLeft: 10 }}>
        <HeaderComponent props='Prakriti Test' />

        <View style={{ marginTop: 20 }}>
          <ProgressBarContainer />
        </View>
        <View style={{ marginTop: Platform.OS == 'web' ? '30%' : '40%' }}>
          <View style={{ marginTop: 15, marginRight: 10 }}>
            <QuestionText>
            Place the screen next to your body part which has been least exposed to sun and select the option which matches your skin tone
            </QuestionText>
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
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 450,
    marginTop: 10,
  },

  wrappImage: {
    height: Platform.OS == 'web' ? wp(10): 90,
    width: 60,
  },
  boxWrapper: {
    height: 120,
    width: Platform.OS == 'web' ? wp(7): wp(20),
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

});

export default PysicalSixteen;
