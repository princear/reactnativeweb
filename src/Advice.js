import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform } from 'react-native';
import HomeHeader from './Component/HomeHeader';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Advice = ({ navigation }) => {


    return (

        <View style={Platform.OS == 'web' ? styles.webView : styles.container}>
            <HomeHeader />
            <View style={{ alignItems: 'center', marginTop: hp(17) }}>
                <Image source={require('../src/assets/icons/Illustration.png')} style={styles.imageCenter} />
                <View style={{ marginTop: hp(7), alignItems: 'center', }}>
                    <Text style={styles.headingText}>Unlock Expert Advice!</Text>
                    <Text style={styles.subheadingText}>Take our tests to get personalized advice based on your unique body needs.</Text>

                </View>
                <TouchableOpacity style={styles.bloodBottomWrapper}>
                    <Text style={styles.bloodTest}>Take Tests</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
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
        resizeMode: 'contain'

    },
    headingText: {
        color: '#363636',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20
    },
    subheadingText: {
        color: '#363636',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: wp(8)
    },
    bloodTest: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#fff',
        marginLeft: wp(2)
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
        justifyContent: 'center'
    }
});

export default Advice;