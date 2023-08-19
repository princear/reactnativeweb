import React, { useState } from 'react';
import { View, StyleSheet,   Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import SubHeading from '../Component/SubHeading';
import ImageOption from '../Component/ImageOption';

const PhysicalFourth  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Dusky',
            image:require('../assets/icons/Ellipse137.png')
        },
        {
            key: 2,
            name: 'Brown',
            image:require('../assets/icons/Ellipse136.png')
        },
        {
            key: 3,
            name: 'Black',
            image:require('../assets/icons/Group26086584.png')
        },
        {
            key: 4,
            name: '',
            image:require('../assets/icons/Group26086594.png')
        },

    ];
  

   
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalThird')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalFifth')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(13)}}>
                    <View style={{ marginTop: hp(5) }}>
                        <QuestionText children='What is your natural hair color?' />
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

export default PhysicalFourth;