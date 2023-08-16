import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform,SafeAreaView, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardTest =  ({navigation}: {navigation: any}) => {


    return (
        <SafeAreaView style={styles.container}>
       
         
            <Image source={require('../src/assets/icons/Group26086436.png')} style={{ marginTop: '13%', height:Platform.OS === 'web' ? '70%' : '40%', width: Platform.OS === 'web' ? '30%' :'80%', resizeMode: 'contain' }} />

            <View style={{ justifyContent: 'center', alignItems: 'center', width: Platform.OS === 'web' ? '25%' : '80%', marginTop: Platform.OS === 'web' ? '3%' : '10%' }}>
                <Text style={{color:"#363636", fontSize: Platform.OS === 'web' ? 27 : 20, fontFamily:'Poppins-Bold' }}>Prakriti Test</Text>
                <Text style={styles.elementText}>We'll ask a few questions to evaluate your body's function and elements</Text>
                <Text style={styles.elementText}>This test is for once in everyone’s lifetime</Text>
                <Text style={styles.subHeadingText}>All the information that you provide will only be used for legitimate diagnosis and determination.</Text>
            </View>
            <TouchableOpacity  
            onPress={() => navigation.navigate('Home')}
                         style={styles.continueWrapper}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"

    },
   
    elementText:{color:"#363636", fontSize: 14, textAlign: 'center',width:wp(70), marginTop: 26,fontFamily:'Poppins-Medium' },
    subHeadingText:{color:"#363636", fontSize: 9, textAlign: 'center', marginTop: hp(5) ,fontFamily:'Poppins-Regular'},
    continueWrapper:{ 
        width: Platform.OS === 'web' ? '30%' : '85%', 
        marginTop: Platform.OS === 'web' ? '5%' : wp(5), 
        height: hp(6), 
        borderRadius: 50, 
        backgroundColor: '#2073D3', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    continueText:{
        fontSize: 14,
        fontFamily:'Poppins-Medium',
        color: '#fff',
    }
});

export default CardTest;