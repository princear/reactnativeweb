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

const Reports = ({navigation}) => {
  return (
    <View style={Platform.OS == 'web' ? styles.webView : styles.container}>
      <HomeHeader />
      <View style={{alignItems: 'center', marginTop: hp(17)}}>
        <Image
          source={require('../src/assets/icons/Group26086782.png')}
          style={styles.imageCenter}
        />
        <View style={{marginTop: hp(7), alignItems: 'center'}}>
          <Text style={styles.headingText}>Unlock Vital Biomarkers!</Text>
          <Text style={styles.subheadingText}>
            There are no record of your reports here. Upload your lab reports to
            get health insights.
          </Text>
        </View>
        <TouchableOpacity style={styles.bloodBottomWrapper}>
          <Image source={require('../src/assets/icons/Add.png')} />
          <Text style={styles.bloodTest}>Add Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 480,
    paddingTop: 30,
  },
  imageCenter: {
    height: hp(22),
    width: wp(60),
    resizeMode: 'contain',
  },
  headingText: {
    color: '#363636',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  subheadingText: {
    color: '#363636',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: wp(8),
  },
  bloodTest: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#fff',
    marginLeft: wp(2),
  },
  bloodBottomWrapper: {
    backgroundColor: '#2073D3',
    width: Platform.OS == 'web' ? wp(10) : wp(50),
    paddingVertical: hp(1.5),
    borderRadius: 30,
    alignItems: 'center',
    marginTop: hp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Reports;
