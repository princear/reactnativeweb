import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import ButtonFullWidth from '../Component/ButtonFullWidth';
import SubHeading from '../Component/SubHeading';

const PhysicalThirty  = ({ navigation }) => {

    const [choice, setChoice] = useState('')
    const pressedButton = (value) => {
        setChoice(value);
    }

    
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalTwentyNine')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalThirtyOne')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(5)}}>
                <View style={{ alignItems: 'center',}}>
                        <Image source={require('../assets/icons/image160.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(3) }}>
                        <QuestionText children='Do you experience frequent movements of your body parts?' />
                        <SubHeading children = 'Frequently moving different body parts, including joints, eyes, eyebrows, jaws, lips, tongue, head, shoulders, hands, and legs.' />
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
        height: 212,
        width: 160,
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PhysicalThirty;