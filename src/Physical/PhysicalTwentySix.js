import React, { useState } from 'react';
import { View, StyleSheet, Image,  Platform, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import QuestionText from '../Component/QuestionText';
import ProgressBarContainer from '../Component/ProgressBar';
import HeaderComponent from '../Component/HeaderComponent';
import BottomNavigation from '../Component/BottomNavigation';
import McqComponent from '../Component/McqComponent';

const PhysicalTwentySix  = ({ navigation }) => {

    const [choice, setChoice] = useState('');

    const [hair, setHair] = useState([
        {
            id: 1,
            name: 'Slim',
        },
        {
            id: 2,
            name: 'Average',
        },
        {
            id: 3,
            name: 'Muscular',
        },
        {
            id: 4,
            name: 'Overweight',
        },
    
    ]);
    const navigationPreviousFlow = () =>{
        navigation.navigate('PhysicalTwentyFive')
    }
    const navigationFlow = () => {
        navigation.navigate('PhysicalTwentySeven')
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>

                <HeaderComponent  props='Prakriti Test' />
                <View style={{ marginTop: 20 }}>
                    <ProgressBarContainer />
                </View>
                <View style={{marginTop:hp(12)}}>
                <View style={{ alignItems: 'center',}}>
                        <Image source={require('../assets/icons/image152.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: hp(4) }}>
                        <QuestionText children='How would you describe your physical appearance or body type?' />
                    </View>
                    <View style={{ marginTop: 15 }}>
                    <McqComponent presentationData={hair} mcqchoice={choice} setMcqChoice={setChoice} />
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
        width: 318,
        resizeMode: 'contain'
    },
    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    headingCenterImage: {
        height: 157,
        width: 278,
        // resizeMode: 'contain'
    },


});

export default PhysicalTwentySix;