import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default function ButtonFullWidth({  choice ,clickedButtonHandler}) {


    return (
        <View>
            <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: choice == 'Yes' ? '#2073D3' : '#fff' }]}
            onPress={() => clickedButtonHandler('Yes')}>
            <Text style={[styles.buttonText, { color: choice == 'Yes' ? '#fff' : '#2073D3' }]}>Yes</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: choice == 'No' ? '#2073D3' : '#fff' }]}
            onPress={() => clickedButtonHandler('No')}>
            <Text style={[styles.buttonText, { color: choice == 'No' ? '#fff' : '#2073D3' }]}>'No</Text>

        </TouchableOpacity>
        </View>
       
    );
}


const styles = StyleSheet.create({
    buttonText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        width: wp(90),
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
