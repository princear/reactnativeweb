import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';
import ImageOption from '../Component/ImageOption';

const PhysicalSeven  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Small',
            image:require('../assets/icons/Group26086755.png')
        },
        {
            key: 2,
            name: 'Medium',
            image:require('../assets/icons/Group26086754.png')
        },
        {
            key: 3,
            name: 'Large',
            image:require('../assets/icons/Group26086753.png')
        },
        

    ];
    
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalSixth')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalEight')
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
                        <QuestionText children='Which of the following describes your eye size?' />
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

export default PhysicalSeven;