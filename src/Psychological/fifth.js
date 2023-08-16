import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PsychlogicalFifth = ({ navigation }) => {


   
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PsychlogicalSixth')}>
                        <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '60%' }}>

                    <Image source={require('../assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 8, }}>
                        <Text style={styles.levelHeading}>Listen to the audio clip carefully and choose the correct option.</Text>
                        <Text style={styles.levelSubHeading}>Tap on Play icon to listen to the audio. You will be able to listen to this audio recording once only.</Text>

                            <View style={styles.boxWrapper}>
                            <Image source={require('../assets/icons/icon_playcircle_filled.png')} style={styles.boxImage}/>
                            </View>

                            <Text style={styles.laterText}>I will do this one later.</Text>
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
        fontSize: 17,
        color: '#363636',
        fontFamily:'Poppins-Medium'
    },
    levelSubHeading: {
        color: '#868686',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'left',
        fontFamily: 'Poppins-Regular',
    },
    boxWrapper:{
        justifyContent:'center',
        alignItems:'center', marginTop:'14%'
    },
    boxImage:{
        height:140,
        width:140
    },
    laterText:{
        fontSize:12,
        textAlign:'center',
        marginTop:20,
        textDecorationLine:'underline',
        color:'#2073D3',
        fontFamily:'Poppins-Medium'
    }


});

export default PsychlogicalFifth;