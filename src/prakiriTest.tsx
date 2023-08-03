import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PrakiriTest = ({navigation}: {navigation: any}) => {

    const familyTest = [
        {
            key: 'LOW',
            text: 'LOW',
        },
        {
            key: 'MEDIUM',
            text: 'MEDIUM',
        },
        {
            key: 'HIGH',
            text: 'HIGH',
        },

    ];
    const [value, setValue] = useState('');
    const memberTest = [
        {
            key: 'LOW',
            text: 'LOW',
        },
        {
            key: 'MEDIUM',
            text: 'MEDIUM',
        },
        {
            key: 'HIGH',
            text: 'HIGH',
        },

    ];
    const [memberValue, setMemberValue] = useState('');

    const[worker, setWorker] = useState('')
    return (

        <View  style={ Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
           
                <View style={{ marginLeft: 10 }}>
                    <View style={styles.headingWrapper}>
                        <View style={styles.rowWrapper}>
                            <Image source={require('../src/assets/icons/image92.png')} style={styles.headingLeftImage} />
                            <Text style={styles.headingContainer}>Prakriti Test</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('PrakiriSecondTest')}>
                            <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: '60%' }}>

                        <Image source={require('../src/assets/icons/Group54.png')} style={styles.headingCenterImage} />
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>Please select your level of communication with:</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>Friends</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {familyTest.map(res => {
                                    return (
                                        <View key={res.key} style={styles.container}>
                                            <TouchableOpacity
                                                style={styles.radioCircle}
                                                onPress={() => {
                                                    setValue(res?.key)
                                                }}>
                                                {value === res.key && <View style={styles.selectedRb} />}
                                            </TouchableOpacity>
                                            <Text style={styles.radioText}>{res.text}</Text>

                                        </View>
                                    );
                                })}
                            </View>

                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>Family Members</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {memberTest.map(res => {
                                    return (
                                        <View key={res.key} style={styles.container}>
                                            <TouchableOpacity
                                                style={styles.radioCircle}
                                                onPress={() => {
                                                    setWorker(res?.key)
                                                }}>
                                                {worker === res.key && <View style={styles.selectedRb} />}
                                            </TouchableOpacity>
                                            <Text style={styles.radioText}>{res.text}</Text>

                                        </View>
                                    );
                                })}
                            </View>

                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>Co-workers</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {memberTest.map(res => {
                                    return (
                                        <View key={res.key} style={styles.container}>
                                            <TouchableOpacity
                                                style={styles.radioCircle}
                                                onPress={() => {
                                                    setMemberValue(res?.key)
                                                }}>
                                                {memberValue === res.key && <View style={styles.selectedRb} />}
                                            </TouchableOpacity>
                                            <Text style={styles.radioText}>{res.text}</Text>

                                        </View>
                                    );
                                })}
                            </View>

                        </View>
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({

    containerWrapper:{
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
        marginTop:'2%',
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
    container: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#323232',
        fontWeight: '500',
        marginRight: 25,
        fontFamily:'Poppins-Medium'
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
        backgroundColor: '#3460D7',
    },

});

export default PrakiriTest;