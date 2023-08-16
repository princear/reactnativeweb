import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, Animated } from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import McqComponent from './Component/McqComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriNinthTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'Humbly extend your help with care'
        },
        {
            id: 2,
            name: 'Offer assistance with little empathy'
        },
        {
            id: 3,
            name: 'Present your help'
        },
        {
            id: 4,
            name: 'Eagerly offer help & availability'
        }
    ])
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriNineteenTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PsychlogicalFirst')
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
                    <Image source={require('../src/assets/icons/Group26086711.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <QuestionText style={styles.levelHeading}>How do you offer assistance to others?</QuestionText>

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
    },

    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop: 10,
    },

    headingCenterImage: {
        height: 184,
        width: 188
    },
  


});

export default PrakiriNinthTest;