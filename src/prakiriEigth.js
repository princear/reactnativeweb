import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PrakiriEigthTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'You did not want to patch up'
        },
        {
            id: 2,
            name: 'You didn’t accept their apology'
        },
        {
            id: 3,
            name: 'You wanted to patch up but hesitated'
        },
        {
            id: 4,
            name: 'You tried but they did not want to'
        }
    ])
    const clickedButtonHandler = (value) => {
        setChoice(value);
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../src/assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrakiriNinthTest')}>
                        <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '60%' }}>

                    <Image source={require('../src/assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>What was the reason behind not fixing the broken relationship?</Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' ,marginTop:20}}>
                        {
                            presentation.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[styles.buttonWrapper, { backgroundColor: choice == item.name? '#2073D3' : '#fff', }]} onPress={(e) => clickedButtonHandler(item.name)}>
                                        <Text style={[styles.buttonText, { color: choice == item.name ? '#fff' : '#2073D3' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
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
        fontFamily:'Poppins-Medium'
    },

    buttonText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily:'Poppins-Medium'
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }


});

export default PrakiriEigthTest;