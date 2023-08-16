import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';




export default function ProgressBarContainer() {

    return (
        <View>
            <View style={styles.progressBarOuterWrapper}>
                <Text style={styles.progressPercentWrapper}>0% completed</Text>
                <View style={styles.rightWrapper}>
                    <Image resizeMode='contain' source={require('../assets/icons/schedule_black.png')} style={styles.rightImage} />
                    <Text style={styles.minutesTextWrapper}>60 minutes</Text>
                </View>

            </View>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, styles.progressData]} />
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    progressBarOuterWrapper: { justifyContent: 'space-between', flexDirection: 'row', marginBottom: 6 },
    progressPercentWrapper: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#868686'
    },
    rightWrapper: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    rightImage: { height: 15, width: 15 },
    minutesTextWrapper: { fontSize: 8, fontFamily: 'Poppins-Medium', color: '#B0B0B0', marginLeft: 5 },
    progressBar: {
        height: 10,
        width: '98%',
        borderColor: '#BFD3EF',
        borderWidth: 2,
        borderRadius: 10
    },
    progressData: {
        backgroundColor: "#2073D3", width: '5%',
        borderRadius: 10

    },
});
