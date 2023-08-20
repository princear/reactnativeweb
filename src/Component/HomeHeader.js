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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeHeader({props}) {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity>
        <Image
          source={require('../assets/icons/HeadGroup.png')}
          style={styles.imageHeadingWrapper}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/icons/notifications.png')}
          style={styles.imageHeadingWrapper}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
    paddingBottom: hp(1),
  },
  imageHeadingWrapper: {
    width: 24,
    height: 24,
  },
});
