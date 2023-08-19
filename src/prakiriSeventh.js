import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  Platform, } from 'react-native';
import HeaderComponent from './Component/HeaderComponent';
import ProgressBarContainer from './Component/ProgressBar';
import QuestionText from './Component/QuestionText';
import BottomNavigation from './Component/BottomNavigation';

const PrakiriSeventhTest = ({ navigation }) => {


    const [friendSelect, setFriendsSelect] = useState('');
    const [familySelect, setFamilySelect] = useState('')
    const [coWorker, setCoWorker] = useState('')

    const navigationPreviousFlow = () => {
        navigation.navigate('PrakiriSixthTest')
      }
      const navigationFlow = () => {
        navigation.navigate('PrakiriEigthTest')
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
                    <Image source={require('../src/assets/icons/Character1.png')} style={styles.headingCenterImage} />
                 </View>
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <QuestionText>Have you ever had a disagreement that caused a permanent tension between you two, resulting in a broken relationship?</QuestionText>

                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With {'\n'}Friends</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setFriendsSelect('Yes')}  style={[styles.friendsButtonWrapper,{backgroundColor:friendSelect == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:friendSelect == 'Yes' ?'#fff':'#2073D3', fontFamily: friendSelect == 'Yes'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setFriendsSelect('No')}  style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:friendSelect == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:friendSelect == 'No' ? '#fff':'#2073D3',fontFamily: friendSelect == 'No'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With {'\n'}Family Members</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setFamilySelect('Yes')} style={[styles.friendsButtonWrapper,{backgroundColor:familySelect == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:familySelect == 'Yes' ?'#fff':'#2073D3',fontFamily: familySelect == 'Yes'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setFamilySelect('No')} style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:familySelect == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:familySelect == 'No' ?'#fff':'#2073D3',fontFamily: familySelect == 'No'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With {'\n'}Co-workers</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setCoWorker('Yes')} style={[styles.friendsButtonWrapper,{backgroundColor:coWorker == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:coWorker == 'Yes' ?'#fff':'#2073D3',fontFamily: coWorker == 'Yes'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => setCoWorker('No')} style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:coWorker == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:coWorker == 'No' ?'#fff':'#2073D3',fontFamily: coWorker == 'No'? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                <BottomNavigation navigateData={navigationFlow} navigatePreviousData={navigationPreviousFlow} />


            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor:'#fff'
    },
    headingContainer:{
        fontSize: 18,
        color: '#363636',
        fontFamily:'Poppins-Medium'
    },
    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop: 10,
    },
    headingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headingLeftImage: {
        height: 35,
        width: 35
    },
    headingCenterImage: {
        height: 157,
        width: 151,
        
    },
    levelHeading: {
        fontSize: 16,
        color: '#363636',
        fontFamily: 'Poppins-SemiBold'
    },
    friendsWrapper:{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginTop: 20 },
    friendsTextWrapper:{ fontFamily: 'Poppins-Medium', color: '#363636', fontSize: 14 },
    friendsButtonWrapper:{ borderWidth: 1, borderColor: '#2073D3', width: 70, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
    friendsButtonTextWrapper:{ fontFamily: 'Poppins-Regular', color: '#2073D3', fontSize: 15 },
    progressBarOuterWrapper:{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 6 },
    progressPercentWrapper:{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#B0B0B0' },
    rightWrapper:{ flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    rightImage:{ height: 15, width: 15 },
    minutesTextWrapper:{ fontSize: 9, fontFamily: 'Poppins-Medium', color: '#B0B0B0', marginLeft: 5 },
    progressBar: {
        height: 10,
        width: '98%',
        borderColor: '#BFD3EF',
        borderWidth: 2,
        borderRadius: 10
    },
    progressData:{
       backgroundColor: "#2073D3", width: '5%',
       borderRadius: 10

    },


});

export default PrakiriSeventhTest;