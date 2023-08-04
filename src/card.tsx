import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform } from 'react-native';


const Card = ({navigation}: {navigation: any})=> {


    const [test, setTest] = useState([
        {
            id: 1,
            name: 'Prakriti Test',
            subName: 'Lorem ipsium dorem',
            image: require('../src/assets/icons/image92.png'),
            color: '#9BDBE7'
        },

        {
            id: 2,
            name: 'Metabolic Test',
            subName: 'Unleash your metabolic power !',
            image: require('../src/assets/icons/image89.png'),
            color: '#F7E7B3'
        },
        {
            id: 3,
            name: 'Sleep Test',
            subName: 'Embark on better sleep and energized days!',
            image: require('../src/assets/icons/image87.png'),
            color: '#FFCDAC'
        },
        {
            id: 4,
            name: 'Stress Test',
            subName: 'Know your path to balanced and serene life',
            image: require('../src/assets/icons/image88.png'),
            color: '#C5E2C4'
        },
        {
            id: 5,
            name: 'Physical Activity Test',
            subName: 'Know your physical activity status!',
            image: require('../src/assets/icons/image91.png'),
            color: '#C5E2C4'
        },
        {
            id: 6,
            name: 'Fatty Liver Test',
            subName: 'Unlock your livers well-being!',
            image: require('../src/assets/icons/image90.png'),
            color: '#C5E2C4'
        }
    ])

    return (

        <View style={styles.container}>
            {Platform.OS === 'web'
                ? <View style={styles.webView}>
                     <TouchableOpacity onPress={() =>
                        navigation.navigate('CardTest')
                    }>
                        <Image source={require('../src/assets/icons/arrow_back.png')} style={styles.backImage} />
                    </TouchableOpacity>
                    <FlatList
                        data={test}
                        numColumns={2}
                        horizontal={false}
                        renderItem={({ item }) => <TouchableOpacity onPress={() =>
                            // navigation.navigate('PrakiriTest')
                            navigation.navigate('PsychlogicalThird')
                        } key={item.id} style={[styles.testWrapper, { backgroundColor: item.color }]}>
                            <Image source={item.image} style={styles.firstWrapper} resizeMode='contain' />
                            <Text style={styles.headingTest}>{item.name}</Text>
                            <Text style={styles.subHeadingTest}>{item.subName}</Text>
                        </TouchableOpacity>}
                    />
                </View>
                : <View>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('CardTest')
                    }>
                        <Image source={require('../src/assets/icons/arrow_back.png')} style={styles.backImage} />
                    </TouchableOpacity>
                    <FlatList
                        data={test}
                        numColumns={2}
                        horizontal={false}

                        renderItem={({ item }) => <TouchableOpacity onPress={() =>
                            navigation.navigate('PrakiriTest')
                            
                        } key={item.id} style={[styles.testMobileWrapper, { backgroundColor: item.color }]}>
                            <Image source={item.image} style={styles.firstWrapper} resizeMode='contain' />
                            <Text style={styles.headingTest}>{item.name}</Text>
                            <Text style={styles.subHeadingTest}>{item.subName}</Text>
                        </TouchableOpacity>}
                    />
                </View>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#C3E8BD',
        paddingTop: 40,
        paddingHorizontal: 10,
    },
    backImage: { height: 30, width: 30 },
    firstWrapper: { height: 45, width: 45, },
    testWrapper: {
        width: '45%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        marginTop: 15
    },
    testMobileWrapper: {
        width: '47%',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 10,
        marginHorizontal: 5,
        marginTop: 15,
       
    },
    headingTest: {
        paddingTop: 24,
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        paddingLeft: 5
    },
    subHeadingTest: {
        paddingTop: 5,
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        paddingLeft: 5
    },
    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        
        // width: 480,
    },
});

export default Card;