import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ImageOption from '../Component/ImageOption';

const PhysicalSeventeen  = ({ navigation }) => {

    const hairList = [
        {
            key: 1,
            name: 'Dry Skin',
            image:require('../assets/icons/image116.png')
        },
        {
            key: 2,
            name: 'Cracked Skin',
            image:require('../assets/icons/image118.png')
        },
        {
            key: 3,
            name: 'Smooth Clear Skin',
            image:require('../assets/icons/image117.png')
        },
        {
            key: 4,
            name: '',
            image:require('../assets/icons/Group26086594.png')
        },
        

    ];
    
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalFourteen')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalEighteen')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(30)}}>
                
                    <View >
                        <QuestionText children='What size are your teeth?' />
                    </View>
                    <View>
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

export default PhysicalSeventeen;