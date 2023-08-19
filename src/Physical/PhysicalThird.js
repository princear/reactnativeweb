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

const PhysicalThird = ({ navigation }) => {

    const [choice, setChoice] = useState('');

    const [hair, setHair] = useState([
        {
            id: 1,
            name: 'Dense Hair',
        },
        {
            id: 2,
            name: 'Normal',
        },
        {
            id: 3,
            name: 'Less Hair',
        },
    ]);

    const navigationPreviousFlow = () => {
        navigation.navigate('PhysicalSecond')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalFourth')
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
                        <Image source={require('../assets/icons/Group26086735.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(12) }}>
                        <QuestionText children='Which of the following best describes your hair density?' />
                        <SubHeading children='Hair Quantity, Include moustache and beard' />
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
        height: 75,
        width: 320,
        resizeMode: 'contain'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicalThird;