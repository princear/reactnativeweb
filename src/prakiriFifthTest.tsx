import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  Platform, } from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import BottomNavigation from './Component/BottomNavigation';
import McqComponent from './Component/McqComponent';

const PrakiriFifthTest = ({ navigation }: { navigation: any }) => {


    const [mcqchoice, setMcqChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'No, I would decline'
        },
        {
            id: 2,
            name: `Maybe, I'm not sure`
        },
        {
            id: 3,
            name: `Yes, I'd try with preparation`
        },
        {
            id: 4,
            name: `Yes, I'd gladly accept and give it my all`
        }
    ])
  
    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriTwelveTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PrakiriThirteenTest')
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
                        <Image source={require('../src/assets/icons/Group26086708.png')} style={styles.headingCenterImage} />
                    </View>

                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <QuestionText>
                            You're asked to give a presentation at work, but you're scared of public speaking. Would you do it?
                        </QuestionText>
                    </View>

                    <View>
                        <McqComponent  presentationData={presentation} mcqchoice={mcqchoice} setMcqChoice={setMcqChoice}/>
                       
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
        height: 170,
        width: 170,
        resizeMode: 'contain'
    },
  

    


});

export default PrakiriFifthTest;