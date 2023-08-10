import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, Animated } from 'react-native';

const PrakiriSixthTest = ({navigation}) => {

    const [drinks, setDrinks] = useState([
        {
            id: 1,
            image: require('../src/assets/icons/Group26086463-1.png')
        },
        {
            id: 2,
            image: require('../src/assets/icons/Group26086461.png')
        },
        {
            id: 3,
            image: require('../src/assets/icons/Group26086455.png')
        },
        {
            id: 4,
            image: require('../src/assets/icons/Group26086457.png')
        },
        {
            id: 5,
            image: require('../src/assets/icons/Group26086460.png')
        },
        {
            id: 6,
            image: require('../src/assets/icons/Group26086458.png')
        },
        {
            id: 7,
            image: require('../src/assets/icons/Group26086462.png')
        },
        {
            id: 8,
            image: require('../src/assets/icons/Group26086456.png')
        },

    ])

    const [drinkSelect, setDrinkSelect] = useState('0')

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../src/assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrakiriSeventhTest')}>
                        <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.progressBarOuterWrapper}>
                        <Text style={styles.progressPercentWrapper}>0% completed</Text>
                        <View style={styles.rightWrapper}>
                            <Image resizeMode='contain' source={require('./assets/icons/schedule_black.png')} style={styles.rightImage} />
                            <Text style={styles.minutesTextWrapper}>60 minutes</Text>
                        </View>

                    </View>
                    <View style={styles.progressBar}>
                        <Animated.View style={[StyleSheet.absoluteFill,styles.progressData]} />
                    </View>

                </View>
                <View style={{ marginTop: Platform.OS == 'web' ? '60%' : '40%' }}>

                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>In moderate temperatures, what do you prefer to have:</Text>
                        <Text style={styles.levelSubHeading}>(Moderate temperature: Neither too hot, nor too cold; ideal temperature such as 250 C)</Text>

                    </View>


                </View>
                <View style={{ paddingBottom: 10,marginTop:10 }}>
                    <FlatList
                        data={drinks}
                        numColumns={4}
                        horizontal={false}
                        renderItem={({ item }) => <TouchableOpacity onPress={(() => setDrinkSelect(item.id))}  key={item.id} style={[styles.boxWrapper,{borderColor:item.id == drinkSelect ? '#3460D7' :'#8F8F8F'}]}>
                            <Image source={item.image} style={styles.wrappImage} resizeMode='contain' />

                        </TouchableOpacity>}
                    />
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
        backgroundColor:'#fff'
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
        fontSize: 16,
        color: '#363636',
        fontFamily: 'Poppins-SemiBold'
    },
    levelSubHeading: {
        color: '#868686',
        fontSize: 13,
        marginTop: 10,
        textAlign: 'justify',
        fontFamily: 'Poppins-Regular'
    },
    wrappImage: {
        height: 90,
        width: 60,
    },
    boxWrapper: {
        height: 120,
        width: 70,
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        backgroundColor:'#fff'
    },
    progressBarOuterWrapper:{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 6 },
    progressPercentWrapper:{ fontSize: 12, fontFamily: 'Poppins-Medium', color: '#B0B0B0' },
    rightWrapper:{ flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    rightImage:{ height: 15, width: 15 },
    minutesTextWrapper:{ fontSize: 9, fontFamily: 'Poppins-Medium', color: '#B0B0B0', marginLeft: 5 },
    progressBar: {
        height: 10,
        width: '98%',
        borderColor: '#BFD3EF',
        borderWidth: 2,
        borderRadius: 10
    },
    progressData:{
       backgroundColor: "#2073D3", width: '5%',
       borderRadius: 10

    },


});

export default PrakiriSixthTest;