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

const PhysicaltwentyOne = ({ navigation }) => {

    const [choice, setChoice] = useState('');

    const [hair, setHair] = useState([
        {
            id: 1,
            name: 'Warmer',
        },
        {
            id: 2,
            name: 'Normal',
        },
        {
            id: 3,
            name: 'Colder',
        },
    ]);

    const navigationPreviousFlow = () => {
        navigation.navigate('PhysicalTwenty')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicaltwentyTwo')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{ marginTop: hp(4) }}>
                    <View style={{ alignItems: 'center', marginTop: hp(10) }}>
                        <Image source={require('../assets/icons/15924809_57082371.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(12) }}>
                        <QuestionText children='What is your usual body temperature?' />
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
        height: 157,
        width: 157,
        resizeMode: 'contain'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicaltwentyOne;