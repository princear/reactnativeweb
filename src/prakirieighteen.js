import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, Animated } from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriEighteenTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'Appreciate and improve'
        },
        {
            id: 2,
            name: 'Acknowledge and express gratitude'
        },
        {
            id: 3,
            name: 'Listen carefully, may feel defensive'
        },
        {
            id: 4,
            name: 'Consider the feedback, even if difficult'
        }
    ])
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriSeventeenTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PrakiriNineteenTest')
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
                        <Image source={require('../src/assets/icons/Group26086707.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: 20, marginRight: 10, }}>
                        <QuestionText style={styles.levelHeading}>How do you react to constructive feedback about your work?</QuestionText>

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
        width: 229
    },




});

export default PrakiriEighteenTest;