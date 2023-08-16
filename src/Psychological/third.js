import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, ScrollView } from 'react-native';

const PsychlogicalThird = ({ navigation }) => {


    const [statement1, setStatement1] = useState('')
    const [statement2, setStatement2] = useState('')
    const [statement3, setStatement3] = useState('')
    const [statement4, setStatement4] = useState('')
    const [statement5, setStatement5] = useState('')

    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PsychlogicalFourth')}>
                        <Image source={require('../assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:60}}>
                <View style={{ marginTop: Platform.OS == 'web' ? '30%' : '20%' }}>
                    
                    <Image source={require('../assets/icons/Group54.png')} style={styles.headingCenterImage} />
                    <View style={{ marginTop: 15, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>
                          On the basis of your understanding of the previous passage, select True or False for the statements given below.
                        </Text>

                    </View>

                    <View style={{marginTop:17}}>
                        <Text style={styles.statementLeftHeading}>1. Jellyfish are not fish.</Text>

                        <View style={styles.statementWrapp}> 
                            <TouchableOpacity onPress={() => setStatement1('TRUE')} style={[styles.statementTrueButtonWrapper,{backgroundColor:statement1 == 'TRUE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement1 == 'TRUE'? '#fff': '#2073D3'}]}>TRUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStatement1('FALSE')} style={[styles.statementFalseButtonWrapper,{backgroundColor:statement1 == 'FALSE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement1 == 'FALSE'? '#fff': '#2073D3'}]}>FALSE</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    <View style={{marginTop:17}}>
                        <Text style={styles.statementLeftHeading}>2. Tentacles digest the food a jellyfish eats.</Text>

                        <View style={styles.statementWrapp}> 
                            <TouchableOpacity onPress={() => setStatement2('TRUE')} style={[styles.statementTrueButtonWrapper,{backgroundColor:statement2 == 'TRUE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement2 == 'TRUE'? '#fff': '#2073D3'}]}>TRUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStatement2('FALSE')} style={[styles.statementFalseButtonWrapper,{backgroundColor:statement2 == 'FALSE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement2 == 'FALSE'? '#fff': '#2073D3'}]}>FALSE</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    <View style={{marginTop:17}}>
                        <Text style={styles.statementLeftHeading}>3. Jellyfish breathe through gills.</Text>

                        <View style={styles.statementWrapp}> 
                            <TouchableOpacity onPress={() => setStatement3('TRUE')} style={[styles.statementTrueButtonWrapper,{backgroundColor:statement3 == 'TRUE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement3 == 'TRUE'? '#fff': '#2073D3'}]}>TRUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStatement3('FALSE')} style={[styles.statementFalseButtonWrapper,{backgroundColor:statement3 == 'FALSE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement3 == 'FALSE'? '#fff': '#2073D3'}]}>FALSE</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    <View style={{marginTop:17}}>
                        <Text style={styles.statementLeftHeading}>4. Jellyfish usually live in freshwater.</Text>

                        <View style={styles.statementWrapp}> 
                            <TouchableOpacity onPress={() => setStatement5('TRUE')} style={[styles.statementTrueButtonWrapper,{backgroundColor:statement5 == 'TRUE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement5 == 'TRUE'? '#fff': '#2073D3'}]}>TRUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStatement5('FALSE')} style={[styles.statementFalseButtonWrapper,{backgroundColor:statement5 == 'FALSE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement5 == 'FALSE'? '#fff': '#2073D3'}]}>FALSE</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                    <View style={{marginTop:17}}>
                        <Text style={styles.statementLeftHeading}>5. Sea turtles eat jellyfish.</Text>

                        <View style={styles.statementWrapp}> 
                            <TouchableOpacity onPress={() => setStatement4('TRUE')} style={[styles.statementTrueButtonWrapper,{backgroundColor:statement4 == 'TRUE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement4 == 'TRUE'? '#fff': '#2073D3'}]}>TRUE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setStatement4('FALSE')} style={[styles.statementFalseButtonWrapper,{backgroundColor:statement4 == 'FALSE' ?  '#2073D3': '#fff'}]}>
                                <Text style={[styles.statementTrueTextWrapper,{color: statement4 == 'FALSE'? '#fff': '#2073D3'}]}>FALSE</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </View>

                </View>
                </ScrollView>
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
        fontSize: 16,
        color: '#363636',
        fontFamily:'Poppins-Medium'
    },
    statementWrapp:{flexDirection:'row', justifyContent:'flex-end', marginTop:8},
    statementTrueButtonWrapper:{borderWidth:1, width:80, height:40, borderTopLeftRadius:20,borderBottomLeftRadius:20, borderColor:'#2073D3', justifyContent:'center', alignItems:'center'},
    statementTrueTextWrapper:{color:'#2073D3', fontSize:14, fontFamily:'Poppins-Medium'},
    statementFalseButtonWrapper:{borderWidth:1, width:80, height:40, borderTopRightRadius:20,borderBottomRightRadius:20, borderColor:'#2073D3', justifyContent:'center', alignItems:'center'},
    statementLeftHeading:{color:'#363636', fontSize:14, fontFamily:'Poppins-Regular'},

});

export default PsychlogicalThird;