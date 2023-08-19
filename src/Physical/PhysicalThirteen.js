import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';

const PhysicalThirteen  = ({ navigation }) => {

    const [choice, setChoice] = useState('')
    const pressedButton = (value) => {
        setChoice(value);
    }

    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalTwelve')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalFourteen')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
               
                    <View style={{ marginTop: hp(50) }}>
                        <QuestionText children='Do your eyes get red after consuming alcohol/ exposure to sun or when angry?' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                    <ButtonFullWidth  firstValue={'Yes'} secondValue={'No'} choice={choice} clickedButtonHandler={pressedButton} />
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

export default PhysicalThirteen;