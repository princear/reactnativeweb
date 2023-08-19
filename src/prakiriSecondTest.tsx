import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  Platform, } from 'react-native';
import QuestionText from './Component/QuestionText';
import OptionHeading from './Component/OptionHeading';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import RadioComponent from './Component/RadioComponent';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriSecondTest = ({ navigation }: { navigation: any }) => {

    const familyTest = [
        {
            key: 'OFTEN',
            text: 'OFTEN',
        },
        {
            key: 'SOMETIMES',
            text: 'SOMETIMES',
        },
        {
            key: 'RARELY',
            text: 'RARELY',
        },

    ];
    const [value, setValue] = useState('');
    const memberTest = [
        {
            key: 'OFTEN',
            text: 'OFTEN',
        },
        {
            key: 'SOMETIMES',
            text: 'SOMETIMES',
        },
        {
            key: 'RARELY',
            text: 'RARELY',
        },

    ];
    const [memberValue, setMemberValue] = useState('');

    const [worker, setWorker] = useState('');

   

    const chooseMessage = (chooseMessage: any) => {
        setValue(chooseMessage);
    };
    const chooseMessage2 = (chooseMessage: any) => {
        setWorker(chooseMessage);

    };
    const chooseMessage3 = (chooseMessage: any) => {
        setMemberValue(chooseMessage);
    };
    const navigationPreviousFlow = () =>{
        navigation.navigate('PrakiriTest')
    }
    const navigationFlow = () => {
        navigation.navigate('PrakiriThirdTest')
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
                        <Image source={require('../src/assets/icons/Group26086697.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(5), }}>
                        <QuestionText>
                            When there is a discussion, do you take control of the conversation and make sure your views are heard?
                        </QuestionText>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading>With Friends</OptionHeading>
                        <View style={{ flexDirection: 'row', width: wp(96), }}>
                        <RadioComponent props={familyTest} value={value} chooseValue={chooseMessage} />
                        </View>

                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading>With Family Member</OptionHeading>
                        <View style={{ flexDirection: 'row' }}>
                        <RadioComponent props={memberTest} value={value} chooseValue={chooseMessage2} />
                        </View>

                    </View>
                    <View style={{ marginTop: 15 }}>
                        <OptionHeading>With Co-workers</OptionHeading>


                        <View style={{ flexDirection: 'row' }}>
                        <RadioComponent props={memberTest} value={value} chooseValue={chooseMessage3} />
                        </View>

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
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    headingLeftImage: {
        height: 35,
        width: 35
    },
    headingCenterImage: {
        height: 110,
        width: 140,
        resizeMode:'contain'
    },

  
   
});

export default PrakiriSecondTest;