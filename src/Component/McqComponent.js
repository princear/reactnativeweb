import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function McqComponent({presentationData,mcqchoice,setMcqChoice}) {


    return (
        <View style={{alignSelf:'center'}}>
            {
                presentationData.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} style={[styles.buttonWrapper, { backgroundColor: mcqchoice == item.name ? '#2073D3' : '#fff', }]} onPress={(e) => setMcqChoice(item.name)}>
                            <Text style={[styles.buttonText, { color: mcqchoice == item.name ? '#fff' : '#2073D3', }]}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>

    );
}


const styles = StyleSheet.create({
    buttonText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width:Platform.OS == 'web' ? wp(30): wp(85)
    },
});
