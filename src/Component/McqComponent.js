import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';



export default function McqComponent({presentationData,mcqchoice,setMcqChoice}) {


    return (
        <View>
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
        fontFamily: 'Poppins-SemiBold',
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
