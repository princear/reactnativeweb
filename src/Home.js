import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import HomeHeader from './Component/HomeHeader';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  const [diease, setDiease] = useState([
    {
      id: 1,
      name: 'Low Bone Density',
    },
    {
      id: 2,
      name: 'Indigestion',
    },
    {
      id: 3,
      name: 'Appendicitis',
    },
    {
      id: 4,
      name: 'Shoulder Pain',
    },
    {
      id: 5,
      name: 'Hypertension',
    },
    {
      id: 6,
      name: 'Hyperacidity',
    },
  ]);
  const [test, setTest] = useState([
    {
      id: 1,
      name: 'PRAKIRI TEST',
      subName: 'Prakriti offers profound insights into individual',
      image: require('../src/assets/icons/image92.png'),
      color: '#9BDBE7',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },

    {
      id: 2,
      name: 'Metabolic Test',
      subName: 'Unleash your metabolic power !',
      image: require('../src/assets/icons/image89.png'),
      color: '#F7E7B3',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },
    {
      id: 3,
      name: 'Sleep Test',
      subName: 'Embark on better sleep and energized days!',
      image: require('../src/assets/icons/image87.png'),
      color: '#FFCDAC',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },
    {
      id: 4,
      name: 'Stress Test',
      subName: 'Know your path to balanced and serene life',
      image: require('../src/assets/icons/image88.png'),
      color: '#C5E2C4',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },
    {
      id: 5,
      name: 'Physical Activity Test',
      subName: 'Know your physical activity status!',
      image: require('../src/assets/icons/image91.png'),
      color: '#C5E2C4',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },
    {
      id: 6,
      name: 'Fatty Liver Test',
      subName: 'Unlock your livers well-being!',
      image: require('../src/assets/icons/image90.png'),
      color: '#C5E2C4',
      imageLock: require('../src/assets/icons/Layer1.png'),
      imageHeading: 'Unlock your Prakriti',
    },
  ]);

  return (
    <View style={Platform.OS == 'web' ? styles.webView : styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HomeHeader />
        <View style={{marginTop: hp(2), marginHorizontal: wp(2)}}>
          <Text style={styles.smallheadingText}>TUESDAY 08 AUG </Text>
          <Text style={styles.headingText}>Hello Vikalp,</Text>
          <View style={styles.dieaseWrapper}>
            <Text style={styles.dieaseHeading}>Astral Prognosis</Text>
            <FlatList
              data={diease}
              numColumns={2}
              horizontal={false}
              renderItem={({item}) => (
                <View key={item.id} style={styles.dieaseRow}>
                  <View style={styles.blackRound} />
                  <Text style={styles.dieaseInnerHeading}>{item.name}</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.testViewWrapper}>
            <Text style={styles.TestheadingText}>My Tests</Text>
            <View>
              <Text style={styles.viewText}>View all</Text>
            </View>
          </View>
          <Text style={styles.progresSubheading}>Your progress of tests</Text>
          <View style={{width: wp(100)}}>
            <FlatList
              data={test}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.testMobileWrapper,
                    {backgroundColor: '#F8F8F8'},
                  ]}>
                  <Image source={item.image} style={styles.ProgressImage} />
                  <Text style={styles.ProgressheadingTest}>{item.name}</Text>
                  <Text style={styles.ProgresssubHeadingTest}>
                    {item.subName}
                  </Text>
                  <View style={styles.lockWrapper}>
                    <Image
                      source={item.imageLock}
                      style={{
                        height: 10,
                        width: 10,
                        marginLeft: Platform.OS == 'web' ? wp(0.5) : wp(0),
                      }}
                      //resizeMode="contain"
                    />
                    <Text style={styles.imageHeadingText}>
                      {item.imageHeading}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={styles.bloodWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../src/assets/icons/blood-test.png')}
                style={{
                  height: Platform.OS == 'web' ? hp(6) : hp(5),
                  width: Platform.OS == 'web' ? wp(4) : wp(20),
                  resizeMode: 'contain',
                }}
              />
              <View style={{flexDirection: 'column', marginLeft: wp(1)}}>
                <Text style={styles.bloodHeading}>Blood Report</Text>
                <Text style={styles.bloodSubHeading}>
                  Add your report so that we can diagnose you better
                </Text>
                <TouchableOpacity style={styles.bloodBottomWrapper}>
                  <Text style={styles.bloodTest}>Book a Blood Test</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: Platform.OS == 'web' ? wp(0) : wp(4)}}>
                <Image
                  source={require('../src/assets/icons/add_circle.png')}
                  style={{
                    height: hp(4),
                    width: Platform.OS == 'web' ? wp(2) : wp(8),
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 480,
    paddingTop: 30,
  },
  ProgressImage: {
    height: 22,
    width: 22,
  },
  smallheadingText: {
    color: '#2073D3',
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
  },
  headingText: {
    color: '#323232',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  TestheadingText: {
    color: '#323232',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  dieaseHeading: {
    color: '#323232',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginBottom: hp(1),
  },
  dieaseWrapper: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: hp(2),
    paddingHorizontal: Platform.OS == 'web' ? wp(2) : wp(4),
    backgroundColor: '#F8F8F8',
    marginTop: hp(2),
  },
  dieaseInnerHeading: {
    color: '#323232',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    marginLeft: Platform.OS == 'web' ? wp(1) : wp(3),
  },
  blackRound: {
    backgroundColor: '#363636',
    height: 6,
    width: 6,
    borderRadius: 50,
    marginLeft: Platform.OS == 'web' ? wp(1) : wp(4),
  },
  dieaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Platform.OS == 'web' ? wp(15) : wp(45),
  },
  testViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },
  viewText: {
    color: '#2073D3',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  progresSubheading: {
    color: '#868686',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  testWrapper: {
    width: '45%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 15,
  },
  testMobileWrapper: {
    width: Platform.OS == 'web' ? wp(10) : wp(34),
    paddingHorizontal: Platform.OS == 'web' ? wp(1) : wp(3),
    paddingVertical: hp(2),
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  headingTest: {
    paddingTop: 24,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#363636',
  },
  ProgressheadingTest: {
    paddingTop: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#363636',
  },
  ProgresssubHeadingTest: {
    fontSize: 10,

    height: wp(12),
    fontFamily: 'Poppins-Medium',
    color: '#868686',
  },
  subHeadingTest: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#868686',
  },
  lockWrapper: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: Platform.OS == 'web' ? wp(0) : wp(1.5),
    marginTop: hp(1.5),
  },
  imageHeadingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    color: '#868686',
    paddingLeft: Platform.OS == 'web' ? wp(0.5) : wp(1),
  },
  bloodWrapper: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    paddingVertical: hp(2),
    paddingHorizontal: Platform.OS == 'web' ? wp(2) : wp(0),
    backgroundColor: '#F8F8F8',
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
    justifyContent: 'space-between',
  },
  bloodHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#363636',
  },
  bloodSubHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#323232',
    width: Platform.OS == 'web' ? wp(20) : wp(50),
  },
  bloodTest: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#fff',
  },
  bloodBottomWrapper: {
    backgroundColor: '#2073D3',
    width: Platform.OS == 'web' ? wp(10) : wp(35),
    paddingVertical: hp(0.5),
    borderRadius: 30,
    alignItems: 'center',
    marginTop: hp(1),
  },
});

export default Home;
