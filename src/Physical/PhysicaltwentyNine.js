import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';

const PhysicalTwentyNine  = ({ navigation }) => {

    const [choice, setChoice] = useState('')
    const pressedButton = (value) => {
        setChoice(value);
    }

    
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalTwentyEight')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalThirty')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(13)}}>
                <View style={{ alignItems: 'center', marginTop: hp(3)}}>
                        <Image source={require('../assets/icons/Group26086814.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(12) }}>
                        <QuestionText children='Does your forehead take up more space than four fingers?' />
                    </View>
                    
                    <View style={{ marginTop: 15 }}>
                    <ButtonFullWidth firstValue={'Yes'} secondValue={'No'} choice={choice} clickedButtonHandler={pressedButton} />
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
        width: 165,
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicalTwentyNine;