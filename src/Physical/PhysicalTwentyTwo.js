import React, { useState } from 'react';
import { View, StyleSheet, Image, Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';
import SubHeading from '../Component/SubHeading';
import McqComponent from '../Component/McqComponent';

const PhysicaltwentyTwo = ({ navigation }) => {

    const [choice, setChoice] = useState('');

    const [hair, setHair] = useState([
        {
            id: 1,
            name: 'Often',
        },
        {
            id: 2,
            name: 'Sometimes',
        },
        {
            id: 3,
            name: 'Rarely',
        },
        {
            id: 4,
            name: 'Never',
        },
    ]);

    const navigationPreviousFlow = () => {
        navigation.navigate('PhysicalTwenty')
    }
    const navigationFlow = () => {
        navigation.navigate('PysicalTwentyThree')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{ marginTop: hp(4) }}>
                    <View style={{ alignItems: 'center', marginTop: hp(6) }}>
                        <Image source={require('../assets/icons/image158.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(7) }}>
                        <QuestionText children='Do you suffer from mouth ulcers?' />
                        <SubHeading children='More than 2-3 times in a year' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <McqComponent presentationData={hair} mcqchoice={choice} setMcqChoice={setChoice} />
                    </View>

                </View>
                <BottomNavigation navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop: 10,
    },

    headingCenterImage: {
        height: 147,
        width: 221,
        resizeMode: 'contain'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicaltwentyTwo;