import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, Platform } from 'react-native';
import React, { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function ImageOption({ hairListData }) {

    return (
        <View  >
            <FlatList
                data={hairListData}
                numColumns={2}
                horizontal={false}

                renderItem={({ item }) =>
                    <TouchableOpacity key={item.id} style={styles.hairWrapper}>
                        <Image source={item.image}  style={styles.hairListImage}/>
                        <Text style={[styles.buttonText]}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>

    );
}


const styles = StyleSheet.create({
    hairWrapper:{
        marginLeft:Platform.OS == 'web' ? wp(0):wp(5),
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        textAlign:'center'
    },
    hairListImage:{
        height: hp(18),
        width: Platform.OS == 'web' ? wp(10): wp(30),
        marginLeft: Platform.OS == 'web' ? wp(3):wp(5),
        resizeMode:'contain'
    }
});
