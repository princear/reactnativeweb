import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../Component/HeaderComponent';
import ProgressBarContainer from '../Component/ProgressBar';
import QuestionText from '../Component/QuestionText';
import BottomNavigation from '../Component/BottomNavigation';
import McqComponent from '../Component/McqComponent';
import SubHeading from '../Component/SubHeading';
const PsychlogicalNewSixth = ({navigation}) => {
  const [statement1, setStatement1] = useState('');
  const [statement2, setStatement2] = useState('');
  const [statement3, setStatement3] = useState('');
  const [statement4, setStatement4] = useState('');
  const [statement5, setStatement5] = useState('');
  const navigationPreviousFlow = () => {
    navigation.navigate('PsychlogicalFourth');
  };
  const navigationFlow = () => {
    navigation.navigate('PsychlogicalFourth');
  };
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>
      <View style={{marginLeft: 10}}>
        <HeaderComponent props="Prakriti Test" />
        <View style={{marginTop: 20}}>
          <ProgressBarContainer />
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: '40%'}}>
          <View style={{marginTop: Platform.OS == 'web' ? '30%' : '10%'}}>
            <QuestionText>
              On the basis of your understanding of the previous passage, select
              True or False for the statements given below.
            </QuestionText>

            <View style={{marginTop: 17}}>
              <Text style={styles.statementLeftHeading}>
                1. The height of a female giraffe can go up to 18 feet.
              </Text>

              <View style={styles.statementWrapp}>
                <TouchableOpacity
                  onPress={() => setStatement1('TRUE')}
                  style={[
                    styles.statementTrueButtonWrapper,
                    {
                      backgroundColor:
                        statement1 == 'TRUE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement1 == 'TRUE' ? '#fff' : '#2073D3'},
                    ]}>
                    TRUE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setStatement1('FALSE')}
                  style={[
                    styles.statementFalseButtonWrapper,
                    {
                      backgroundColor:
                        statement1 == 'FALSE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement1 == 'FALSE' ? '#fff' : '#2073D3'},
                    ]}>
                    FALSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 17}}>
              <Text style={styles.statementLeftHeading}>
                2. The giraffe can run at 50km/hr.
              </Text>

              <View style={styles.statementWrapp}>
                <TouchableOpacity
                  onPress={() => setStatement2('TRUE')}
                  style={[
                    styles.statementTrueButtonWrapper,
                    {
                      backgroundColor:
                        statement2 == 'TRUE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement2 == 'TRUE' ? '#fff' : '#2073D3'},
                    ]}>
                    TRUE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setStatement2('FALSE')}
                  style={[
                    styles.statementFalseButtonWrapper,
                    {
                      backgroundColor:
                        statement2 == 'FALSE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement2 == 'FALSE' ? '#fff' : '#2073D3'},
                    ]}>
                    FALSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 17}}>
              <Text style={styles.statementLeftHeading}>
                3. Giraffes eat acacia leaves only.
              </Text>

              <View style={styles.statementWrapp}>
                <TouchableOpacity
                  onPress={() => setStatement3('TRUE')}
                  style={[
                    styles.statementTrueButtonWrapper,
                    {
                      backgroundColor:
                        statement3 == 'TRUE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement3 == 'TRUE' ? '#fff' : '#2073D3'},
                    ]}>
                    TRUE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setStatement3('FALSE')}
                  style={[
                    styles.statementFalseButtonWrapper,
                    {
                      backgroundColor:
                        statement3 == 'FALSE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement3 == 'FALSE' ? '#fff' : '#2073D3'},
                    ]}>
                    FALSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 17}}>
              <Text style={styles.statementLeftHeading}>
                4. Giraffes spend most of their time eating during summers.
              </Text>

              <View style={styles.statementWrapp}>
                <TouchableOpacity
                  onPress={() => setStatement5('TRUE')}
                  style={[
                    styles.statementTrueButtonWrapper,
                    {
                      backgroundColor:
                        statement5 == 'TRUE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement5 == 'TRUE' ? '#fff' : '#2073D3'},
                    ]}>
                    TRUE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setStatement5('FALSE')}
                  style={[
                    styles.statementFalseButtonWrapper,
                    {
                      backgroundColor:
                        statement5 == 'FALSE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement5 == 'FALSE' ? '#fff' : '#2073D3'},
                    ]}>
                    FALSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 17}}>
              <Text style={styles.statementLeftHeading}>
                5. Giraffes have a long range of vision.
              </Text>

              <View style={styles.statementWrapp}>
                <TouchableOpacity
                  onPress={() => setStatement4('TRUE')}
                  style={[
                    styles.statementTrueButtonWrapper,
                    {
                      backgroundColor:
                        statement4 == 'TRUE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement4 == 'TRUE' ? '#fff' : '#2073D3'},
                    ]}>
                    TRUE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setStatement4('FALSE')}
                  style={[
                    styles.statementFalseButtonWrapper,
                    {
                      backgroundColor:
                        statement4 == 'FALSE' ? '#2073D3' : '#fff',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.statementTrueTextWrapper,
                      {color: statement4 == 'FALSE' ? '#fff' : '#2073D3'},
                    ]}>
                    FALSE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <BottomNavigation
            navigateData={navigationFlow}
            navigatePreviousData={navigationPreviousFlow}
          />
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
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 450,
    marginTop: 10,
  },
  headingContainer: {
    fontSize: 18,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },

  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingLeftImage: {
    height: 35,
    width: 35,
  },
  headingCenterImage: {
    height: 70,
    width: 70,
  },
  levelHeading: {
    fontSize: 16,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
  },
  statementWrapp: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  statementTrueButtonWrapper: {
    borderWidth: 1,
    width: 80,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: '#2073D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementTrueTextWrapper: {
    color: '#2073D3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  statementFalseButtonWrapper: {
    borderWidth: 1,
    width: 80,
    height: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#2073D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementLeftHeading: {
    color: '#363636',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default PsychlogicalNewSixth;
