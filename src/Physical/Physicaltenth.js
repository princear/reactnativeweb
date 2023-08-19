import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';
import ImageOption from '../Component/ImageOption';

const PhysicalTenth  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Dull White Sclera',
            image:require('../assets/icons/Screenshot_2023-08-09_at_12-26-34_Close_Portrait_Young_Hindoo_Mans_Face_Stock_Photo_1458985325_Shutterstock-transformed1.png')
        },
        {
            key: 2,
            name: 'Coppery Eyes',
            image:require('../assets/icons/CopperyEyes.png')
        },
        {
            key: 3,
            name: 'Milky White Sclera',
            image:require('../assets/icons/Group26086760.png')
        },
        

    ];
    
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalNine')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalEleven')
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
                        <QuestionText children='Which of the following best describes your eyes:' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <ImageOption hairListData={hairList}/>
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

export default PhysicalTenth;