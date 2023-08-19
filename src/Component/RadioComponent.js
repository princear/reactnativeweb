import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default function RadioComponent({ props, value ,chooseValue}) {

    return (
        <View style={styles.radioContainer}>
            {
                props.map((res) => {
                    return (
                        <View key={res.key} style={styles.containerWrapper}>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => chooseValue(res?.key)}>
                                {value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                            <Text style={styles.radioText}>{res.text}</Text>
                        </View>
                    )
                })
            }
        </View>

    );
}


const styles = StyleSheet.create({
    radioContainer: { 
        flexDirection: 'row',
     width: Platform.OS == 'web' ? wp(33): wp(96), 
    },
    containerWrapper: {
        marginTop: 15,
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: wp(2),
        fontSize: 14,
        color: '#323232',
        marginRight: wp(8),
        fontFamily: 'Poppins-Medium',
    },
    radioCircle: {
        height: 22,
        width: 22,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',

    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#3460D7',
        backgroundColor: '#3460D7',
    },
});
