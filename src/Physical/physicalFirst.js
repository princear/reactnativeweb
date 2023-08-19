import React, { useState } from 'react';
import { View, StyleSheet,   Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import SubHeading from '../Component/SubHeading';
import ImageOption from '../Component/ImageOption';

const PhysicalFirst  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Dry/Split',
            image:require('../assets/icons/Group26086803.png')
        },
        {
            key: 2,
            name: 'Soft',
            image:require('../assets/icons/image151.png')
        },
        {
            key: 3,
            name: 'Rough',
            image:require('../assets/icons/Group26086805.png')
        },
        {
            key: 4,
            name: 'Oily',
            image:require('../assets/icons/Group26086807.png')
        },

    ];
  

    const navigationFlow = () => {
        navigation.navigate('PhysicalSecond')
    }
    const navigationPreviousFlow = () =>{
        // navigation.navigate('PhysicalSecond')
    }

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(10)}}>
                    <View style={{ marginTop: hp(5) }}>
                        <QuestionText children='Which of the following matches your hair texture?' />
                        <SubHeading children='Without use of hair gel, oil etc' />
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

export default PhysicalFirst;