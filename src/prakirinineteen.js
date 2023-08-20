import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  Platform } from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriNineteenTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'Pause and allow them to speak'
        },
        {
            id: 2,
            name: 'Politely address the interruption'
        },
        {
            id: 3,
            name: 'Respond with understanding'
        },
        {
            id: 4,
            name: 'Express appreciation and continue'
        }
    ])
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriEighteenTest')
    }
    const navigationFlow = () => {
        navigation.navigate('TestScreen')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <HeaderComponent props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View >
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Image source={require('../src/assets/icons/24487858_69600821.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: 20, marginRight: 10, }}>
                        <QuestionText style={styles.levelHeading}>What is your response when someone kindly interrupts you during a conversation?</QuestionText>

                    </View>

                    <View style={{ marginTop: 10 }}>
                        <McqComponent presentationData={presentation} mcqchoice={choice} setMcqChoice={setChoice} />
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

    headingCenterImage: {
        height: 157,
        width: 157
    },



});

export default PrakiriNineteenTest;