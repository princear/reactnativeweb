import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';
import ImageOption from '../Component/ImageOption';
import McqComponent from '../Component/McqComponent';

const PhysicalEight  = ({ navigation }) => {

    const [choice, setChoice] = useState('');

    const [hair, setHair] = useState([
        {
            id: 1,
            name: 'Dry Eyes',
        },
        {
            id: 2,
            name: 'Irritated Eyes',
        },
        {
            id: 3,
            name: 'Tired Eyes',
        },
        {
            id: 4,
            name: 'Frequent blinking of Eyes',
        },
        {
            id: 5,
            name: 'None of the above',
        },
    ]);
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalSeven')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalNine')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(5)}}>
                
                    <View style={{ marginTop: hp(12) }}>
                        <QuestionText children='Are you experiencing any of the following symptoms? (Multiple Selection)' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                    <McqComponent presentationData={hair} mcqchoice={choice} setMcqChoice={setChoice} />
                    </View>
                    
                </View>
                <BottomNavigation  navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />
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
        width: 318,
        resizeMode: 'contain'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicalEight;