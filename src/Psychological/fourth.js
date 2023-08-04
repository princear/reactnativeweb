import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert } from 'react-native';

const PsychlogicalFourth = ({ navigation }) => {


    const [click, setClick] = useState('')


    const [usualDrink, setUsualDrink] = useState([
        {
            id: 1,
            name: 'Choose your usual drink'
        },
        {
            id: 2,
            name: 'Ask the server for recommendation'
        },
        {
            id: 3,
            name: 'Spend time on browsing, still unsure'
        }
    ])
    const clickedButtonHandler = (value) => {
        setClick(value);
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrakiriNinthTest')}>
                        <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '60%' }}>

                    <Image source={require('../assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 8, }}>
                        <Text style={styles.levelHeading}>Memorize the color pattern carefully.</Text>

                            <View style={styles.boxWrapper}>
                            <Image source={require('../assets/icons/Group26086502.png')} style={styles.boxImage}/>
                            </View>
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

    boxWrapper:{
        justifyContent:'center',
        alignItems:'center', marginTop:'14%'
    },
    boxImage:{
        height:140,
        width:140
    }


});

export default PsychlogicalFourth;