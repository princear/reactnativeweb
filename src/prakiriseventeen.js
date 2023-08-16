import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, } from 'react-native';
import BottomNavigation from './Component/BottomNavigation';
import McqComponent from './Component/McqComponent';
import QuestionText from './Component/QuestionText';
import ProgressBarContainer from './Component/ProgressBar';
import HeaderComponent from './Component/HeaderComponent';

const PrakiriSeventeenTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'Listen to their viewpoint'
        },
        {
            id: 2,
            name: 'Share your perspective politely'
        },
        {
            id: 3,
            name: 'Acknowledge their opinion gracefully'
        },
        {
            id: 4,
            name: 'Agree to disagree respectfully'
        }
    ])
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriEigthTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PrakiriEighteenTest')
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
                        <Image source={require('../src/assets/icons/Group26086709.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: 20, marginRight: 10, }}>
                        <QuestionText>When someone disagrees with you, how do you respond?</QuestionText>

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
        width: 263
    },

});

export default PrakiriSeventeenTest;