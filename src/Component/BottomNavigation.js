import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default function BottomNavigation({navigateData,navigatePreviousData}) {


    return (
        <View style={styles.bottomWrapper}>
            <TouchableOpacity onPress={() => navigatePreviousData()} style={{ flexDirection: 'row' ,alignItems:'center'}}>
                <View>
                    <Image source={require('../assets/icons/arrow_back_ios_new.png')} style={styles.bottomImage}/>
                </View>
                <Text style={styles.previousText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateData()} style={{ flexDirection: 'row' ,alignItems:'center'}}>

                <Text style={styles.skipText}>Skip</Text>
                <View>
                    <Image source={require('../assets/icons/arrow_forward_ios.png')}style={styles.bottomImage} />
                </View>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:hp(4)
    },
    previousText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginLeft:wp(2)
    },
    skipText:{
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight:wp(2)
    },
    bottomImage:{
        height:20,
        width:20
    }
});
