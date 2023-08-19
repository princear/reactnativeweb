import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,  Platform,  } from 'react-native';

const PsychologicalSeventh = ({navigation}) => {

 
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity >
                        <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '90%' }}>

                    <Image source={require('../assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>Spot the difference with in 3 minutes.</Text>
                        <Text style={styles.levelSubHeading}>You will see an image next for 3 minutes where you have to spot maximum difference.</Text>

                    </View>
                    <View style={{ alignItems:'flex-end', marginTop:'10%', marginRight:20}}>
                    <TouchableOpacity style={styles.readyWrapper}>
                        <Text style={styles.readyText}>Ready</Text>
                    </TouchableOpacity>
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
    levelSubHeading: {
        color: '#868686',
        fontSize: 13,
        marginTop: 10,
        textAlign: 'justify',
        fontFamily: 'Poppins-Regular'
    },
    readyWrapper:{
        borderWidth:1,
        borderColor:'#2073D3',
        width:80,
        height:40,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center',
    },
    readyText:{
        color:'#2073D3',
        fontFamily:'Poppins-Regular',
        fontSize:14,
    }
    


});

export default PsychologicalSeventh;