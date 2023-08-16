import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default function HeaderComponent({props}) {

    return (
        <View style={styles.headingWrapper}>
        <View style={styles.rowWrapper}>
            <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
            <Text style={styles.headingContainer}>{props}</Text>
        </View>
        <TouchableOpacity>
            <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
        </TouchableOpacity>
    </View>
    );
}


const styles = StyleSheet.create({
    headingContainer: {
        fontSize: 18,
        color: '#363636',
        fontFamily: 'Poppins-SemiBold',

    },
   

    headingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headingLeftImage: {
        height: 35,
        width: 35
    },
});
