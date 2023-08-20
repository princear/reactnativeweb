import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from './Component/QuestionText';
import OptionHeading from './Component/OptionHeading';
import RadioComponent from './Component/RadioComponent';
import ProgressBarContainer from './Component/ProgressBar';
import HeaderComponent from './Component/HeaderComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriTest  = ({ navigation }: { navigation: any }) => {

    const familyTest = [
        {
            key: 'LOW',
            text: 'LOW',
        },
        {
            key: 'MEDIUM',
            text: 'MEDIUM',
        },
        {
            key: 'HIGH',
            text: 'HIGH',
        },

    ];
    const [value, setValue] = useState('');
    const memberTest = [
        {
            key: 'LOW',
            text: 'LOW',
        },
        {
            key: 'MEDIUM',
            text: 'MEDIUM',
        },
        {
            key: 'HIGH',
            text: 'HIGH',
        },

    ];
    const [memberValue, setMemberValue] = useState('');

    const [worker, setWorker] = useState('');


    const chooseMessage = (chooseMessage: any) => {
        setValue(chooseMessage);
    };
    const chooseMessage2 = (chooseMessage: any) => {
        setMemberValue(chooseMessage);
    };
    const chooseMessage3 = (chooseMessage: any) => {
        setWorker(chooseMessage);
    };

    const navigationFlow = () => {
        navigation.navigate('PrakiriSecondTest')
    }
    const navigationPreviousFlow = () =>{
        navigation.navigate('TestScreen')
    }

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View>
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Image source={require('../src/assets/icons/Group26086693.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(5) ,width: Platform.OS == 'web' ? wp(38) : wp(80),}}>
                        <QuestionText children='Please select your level of communication with:' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading> Friends</OptionHeading>
                        <RadioComponent props={familyTest} value={value} chooseValue={chooseMessage} />

                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading>Family Members</OptionHeading>
                        <RadioComponent props={memberTest} value={memberValue} chooseValue={chooseMessage2} />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading>Co-workers</OptionHeading>
                        <RadioComponent props={memberTest} value={worker} chooseValue={chooseMessage3} />
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
        height: 142,
        width: 150,
        // resizeMode: 'cover'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },



});

export default PrakiriTest;