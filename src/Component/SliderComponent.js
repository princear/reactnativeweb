import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
export default function SliderComponent({props}) {
  return (
    <View style={styles.headingWrapper}>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
        }}>
        <Slider
          style={{width: '90%', alignSelf: 'center', height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#698FFF"
          maximumTrackTintColor="#031A5F"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
