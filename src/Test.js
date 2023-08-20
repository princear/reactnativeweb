import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import HomeHeader from './Component/HomeHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TestScreen = ({navigation}) => {
  const [test, setTest] = useState([
    {
      id: 1,
      name: 'Prakriti Test',
      subName: 'Prakriti offers profound insights into individual',
      image: require('../src/assets/icons/image92.png'),
      color: '#9BDBE7',
      testuser: 'PrakiriTestNavigator',
    },

    {
      id: 2,
      name: 'Metabolic Test',
      subName: 'Unleash your metabolic power !',
      image: require('../src/assets/icons/image89.png'),
      color: '#F7E7B3',
      testuser: 'PhysicalTestNavigator',
    },
    {
      id: 3,
      name: 'Sleep Test',
      subName: 'Embark on better sleep and energized days!',
      image: require('../src/assets/icons/image87.png'),
      color: '#FFCDAC',
      testuser: 'SleepTestNavigator',
    },
    {
      id: 4,
      name: 'Stress Test',
      subName: 'Know your path to balanced and serene life',
      image: require('../src/assets/icons/image88.png'),
      color: '#C5E2C4',
      testuser: 'StressTestNavigator',
    },
    {
      id: 5,
      name: 'Physical Activity Test',
      subName: 'Know your physical activity status!',
      image: require('../src/assets/icons/image91.png'),
      color: '#C5E2C4',
      testuser: 'PhysicalActivityTestNavigator',
    },
    {
      id: 6,
      name: 'Fatty Liver Test',
      subName: 'Unlock your livers well-being!',
      image: require('../src/assets/icons/image90.png'),
      color: '#C5E2C4',
      testuser: 'PsychologicalTestNavigator',
    },
  ]);

  return (
    <View style={Platform.OS === 'web' ? styles.webView : styles.container}>
      <HomeHeader />

      <FlatList
        data={test}
        numColumns={2}
        horizontal={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.testuser)}
            key={item.id}
            style={[styles.testWrapper, {backgroundColor: item.color}]}>
            <Image
              source={item.image}
              style={styles.firstWrapper}
              resizeMode="contain"
            />
            <Text style={styles.headingTest}>{item.name}</Text>
            <Text style={styles.subHeadingTest}>{item.subName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  backImage: {height: 30, width: 30},
  firstWrapper: {height: 50, width: 50},
  testWrapper: {
    width: wp(44),
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: Platform.OS == 'web' ? wp(1) : wp(2),
    marginTop: wp(6),
  },
  testMobileWrapper: {
    width: '47%',
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 15,
  },
  headingTest: {
    paddingTop: 24,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    paddingLeft: 5,
  },
  subHeadingTest: {
    paddingTop: 5,
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 5,
  },
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 480,
  },
});

export default TestScreen;
