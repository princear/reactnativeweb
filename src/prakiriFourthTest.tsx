import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PrakiriFourthTest = ({ navigation }: { navigation: any }) => {


    const [choice, setChoice] = useState('')


    const clickedButtonHandler = (value: string) => {
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
                    <TouchableOpacity  onPress={() => navigation.navigate('PrakiriFifthTest')}>
                        <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web'? '60%':'60%'  }}>

                    <Image source={require('../src/assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>dddddd Can you speak at length on any topic of your choice?</Text>
                        <Text style={styles.levelSubHeading}>(Topics such as pollution, politics, hobbies, equality etc)</Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: choice == 'Yes' ? '#2073D3' : '#fff', }]} onPress={(e) => clickedButtonHandler('Yes')}>
                            <Text style={[styles.buttonText, { color: choice == 'Yes' ? '#fff' : '#2073D3' }]}>Yes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonWrapper, { backgroundColor: choice == 'No' ? '#2073D3' : '#fff' }]} onPress={() => clickedButtonHandler('No')}>
                            <Text style={[styles.buttonText, { color: choice == 'No' ? '#fff' : '#2073D3' }]}>No</Text>

                        </TouchableOpacity>
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
        marginTop:10,
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
    levelSubHeading: {
        color: '#868686',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'justify',
        fontFamily:'Poppins-Regular',
      
    },
    buttonText: {
        color: '#2073D3',
        fontSize: 15,
        fontFamily:'Poppins-Medium'
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        width: '22%',
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }


});

export default PrakiriFourthTest;