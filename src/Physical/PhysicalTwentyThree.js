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

const PysicalTwentyThree = ({ navigation }) => {
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      image: require('../assets/icons/Group26086562.png'),
    },
    {
      id: 2,
      image: require('../assets/icons/Group26086561.png'),
    },
    {
      id: 3,
      image: require('../assets/icons/Group26086560.png'),
    },
   
  ]);

  const [drinkSelect, setDrinkSelect] = useState('0');

  const navigationPreviousFlow = () => {
    navigation.navigate('PhysicaltwentyTwo')
  }
  const navigationFlow = () => {
    navigation.navigate('PhysicalTwentyFour')
  }
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{ marginLeft: 10 }}>
        <HeaderComponent props='Prakriti Test' />

        <View style={{ marginTop: 20 }}>
          <ProgressBarContainer />
        </View>
        <View style={{ marginTop: Platform.OS == 'web' ? hp(40): hp(45) }}>
          <View style={{ marginTop: 15, marginRight: 10 }}>
            <QuestionText>
            What is the size of your nail bed?
            </QuestionText>
          </View>
        </View>
        <View style={{  marginTop: 10 }}>
          <FlatList
            data={drinks}
            numColumns={3}
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
    height: Platform.OS == 'web' ? wp(10): 138,
    width: 90,
  },
  boxWrapper: {
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

});

export default PysicalTwentyThree;
