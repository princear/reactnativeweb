import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, Animated } from 'react-native';
import QuestionText from './Component/QuestionText';
import SubHeading from './Component/SubHeading';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FullWidthOption from './Component/FullWidthOption';
import FullWidthText from './Component/FullWidthText';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import ButtonFullWidth from './Component/ButtonFullWidth';
import BottomNavigation from './Component/BottomNavigation';


const PrakiriThirdTest = ({ navigation }: { navigation: any }) => {


    const [choice, setChoice] = useState('')


    const pressedButton = (value: string) => {
        setChoice(value);

    }
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriSecondTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PrakiriEvelvenTest')
    }
    return (


        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <HeaderComponent props='Prakriti Test' />


                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View>
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Image source={require('../src/assets/icons/image137.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: wp(5), marginRight: 10, }}>
                        <QuestionText>Would you decribe yourself as soft-spoken?</QuestionText>
                        <SubHeading>(Soft-spoken: Having a pleasant, quiet, or gentle voice or manner. It can be described as having a speaking manner that is not loud or harsh.)</SubHeading>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <ButtonFullWidth choice={choice} clickedButtonHandler={pressedButton} />
                    </View>
                    <BottomNavigation navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop: 10,
    },
  
    headingLeftImage: {
        height: 35,
        width: 35
    },

    headingCenterImage: {
        height: 170,
        width: 240,
        resizeMode: 'contain'
    },
  
    


});

export default PrakiriThirdTest;