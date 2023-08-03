import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';

const CardTest =  ({navigation}: {navigation: any}) => {


    return (

        <View style={{ justifyContent: 'center', alignItems: 'center', }}>

            <Image source={require('../src/assets/icons/Group26086436.png')} style={{ marginTop: '13%', height:Platform.OS === 'web' ? '70%' : '40%', width: Platform.OS === 'web' ? '30%' :'80%', resizeMode: 'contain' }} />

            <View style={{ justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'web' ? '25%' : '80%', marginTop: Platform.OS === 'web' ? '3%' : '10%' }}>
                <Text style={{ fontSize: Platform.OS === 'web' ? 27 : 20, fontFamily:'Poppins-Bold' }}>Prakriti Test</Text>
                <Text style={styles.elementText}>We'll ask a few questions to evaluate your body's function and elements</Text>
                <Text style={styles.subHeadingText}>All the information that you provide will only be used for legitimate diagnosis and determination.</Text>
            </View>
            <TouchableOpacity  onPress={() =>
                            navigation.navigate('Home')
                        } style={styles.continueWrapper}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({


    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        // width: 480,
    },
    elementText:{ fontSize: 16, textAlign: 'center', marginTop: 12,fontFamily:'Poppins-Medium' },
    subHeadingText:{ fontSize: 12, textAlign: 'center', marginTop: 12 ,fontFamily:'Poppins-Regular'},
    continueWrapper:{ 
        width: Platform.OS === 'web' ? '30%' : '85%', 
        marginTop: Platform.OS === 'web' ? '5%' : '34%', 
        height: '9%', 
        borderRadius: 50, 
        backgroundColor: '#3460D7', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    continueText:{
        fontSize: 20, 
        color: '#fff',
    }
});

export default CardTest;