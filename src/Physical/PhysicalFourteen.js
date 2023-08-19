import React, { useState } from 'react';
import { View, StyleSheet,   Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ImageOption from '../Component/ImageOption';

const PhysicalFourteen  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Dry/ Rough',
            image:require('../assets/icons/cfarmafarma_transleitfotogettyimages-477389914-820x5101.png')
        },
        {
            key: 2,
            name: 'Normal',
            image:require('../assets/icons/image77.png')
        }

    ];
  
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalThirteen')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalFifteen')
    }
  

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(40)}}>
                    <View style={{ marginTop: hp(5) }}>
                        <QuestionText children='Which of the following matches the texture of your teeth?' />
                    </View>
                    <View style={{ marginTop: 2 }}>
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
        height: 142,
        width: 150,
        // resizeMode: 'cover'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicalFourteen;