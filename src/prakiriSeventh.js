import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PrakiriSeventhTest = ({ navigation }) => {


    const [friendSelect, setFriendsSelect] = useState('');
    const [familySelect, setFamilySelect] = useState('')
    const [coWorker, setCoWorker] = useState('')

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../src/assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrakiriEigthTest')}>
                        <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '60%' }}>

                    <Image source={require('../src/assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>Have you ever had a disagreement that caused a permanent tension between you two, resulting in a broken relationship?</Text>

                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With Friends</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setFriendsSelect('Yes')}  style={[styles.friendsButtonWrapper,{backgroundColor:friendSelect == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:friendSelect == 'Yes' ?'#fff':'#2073D3'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setFriendsSelect('No')}  style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:friendSelect == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:friendSelect == 'No' ? '#fff':'#2073D3'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With {'\n'}Family Members</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setFamilySelect('Yes')} style={[styles.friendsButtonWrapper,{backgroundColor:familySelect == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:familySelect == 'Yes' ?'#fff':'#2073D3'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setFamilySelect('No')} style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:familySelect == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:familySelect == 'No' ?'#fff':'#2073D3'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.friendsWrapper}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.friendsTextWrapper}>With {'\n'}Co-workers</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setCoWorker('Yes')} style={[styles.friendsButtonWrapper,{backgroundColor:coWorker == 'Yes' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:coWorker == 'Yes' ?'#fff':'#2073D3'}]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => setCoWorker('No')} style={[styles.friendsButtonWrapper,{marginLeft:20,backgroundColor:coWorker == 'No' ?'#2073D3':'#fff'}]}>
                                <Text style={[styles.friendsButtonTextWrapper,{color:coWorker == 'No' ?'#fff':'#2073D3'}]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        height: 70,
        width: 70
    },
    levelHeading: {
        fontSize: 18,
        color: '#363636',
        fontFamily: 'Poppins-Medium'
    },
    friendsWrapper:{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginTop: 20 },
    friendsTextWrapper:{ fontFamily: 'Poppins-Medium', color: '#363636', fontSize: 15 },
    friendsButtonWrapper:{ borderWidth: 1, borderColor: '#2073D3', width: 80, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
    friendsButtonTextWrapper:{ fontFamily: 'Poppins-Regular', color: '#2073D3', fontSize: 15 },



});

export default PrakiriSeventhTest;