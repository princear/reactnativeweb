import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PrakiriSecondTest = ({navigation}: {navigation: any}) => {

    const familyTest = [
        {
            key: 'OFTEN',
            text: 'OFTEN',
        },
        {
            key: 'SOMETIMES',
            text: 'SOMETIMES',
        },
        {
            key: 'RARELY',
            text: 'RARELY',
        },

    ];
    const [value, setValue] = useState('');
    const memberTest = [
        {
            key: 'OFTEN',
            text: 'OFTEN',
        },
        {
            key: 'SOMETIMES',
            text: 'SOMETIMES',
        },
        {
            key: 'RARELY',
            text: 'RARELY',
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
                        <TouchableOpacity onPress={() => navigation.navigate('PrakiriThirdTest')}>
                            <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: Platform.OS == 'web'? '60%':'60%' }}>

                        <Image source={require('../src/assets/icons/Group54.png')} style={styles.headingCenterImage} />
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>When there is a discussion, do you take control of the conversation and make sure your views are heard?</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.levelHeading}>With Friends</Text>
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
                            <Text style={styles.levelHeading}>With Family Members</Text>
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
                            <Text style={styles.levelHeading}>With Co-workers</Text>
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
    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop:10,
    },
    headingContainer:{
        fontSize: 18,
        color: '#363636',
        fontFamily:'Poppins-Medium'
    },
    containerWrapper:{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
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

export default PrakiriSecondTest;