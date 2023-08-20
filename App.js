import React, {useState} from 'react';
import Card from './src/card';
import CardTest from './src/cardTest';
import PrakiriTest from './src/prakiriTest';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PrakiriSecondTest from './src/prakiriSecondTest';
import PrakiriThirdTest from './src/prakiriThirdest';
import PrakiriFourthTest from './src/prakiriFourthTest';
import PrakiriFifthTest from './src/prakiriFifthTest';
import PrakiriSixthTest from './src/prakiriSixth';
import PrakiriSeventhTest from './src/prakiriSeventh';
import PrakiriEigthTest from './src/prakiriEigth';
import PrakiriNinthTest from './src/prakiriNinth';
import PrakiriTenthTest from './src/prakiriTenth';
import PsychlogicalThird from './src/Psychological/third';
import PsychlogicalSecond from './src/Psychological/Second';
import PsychlogicalFirst from './src/Psychological/first';
import PsychlogicalFourth from './src/Psychological/fourth';
import PsychlogicalFifth from './src/Psychological/fifth';
import PsychlogicalSixth from './src/Psychological/sixth';
import PsychologicalSeventh from './src/Psychological/seventh';
import PrakiriEvelvenTest from './src/prakiriEleven';
import PrakiriTwelveTest from './src/prakiritwelve';
import PrakiriThirteenTest from './src/prakirithirteen';
import PrakiriFourteenTest from './src/prakirifourteen';
import PrakiriFifteenTest from './src/prakirififteen';
import PrakiriSixteenTest from './src/prakirisixteen';
import PrakiriSeventeenTest from './src/prakiriseventeen';
import PrakiriEighteenTest from './src/prakirieighteen';
import PrakiriNineteenTest from './src/prakirinineteen';
import {Provider} from 'react-redux';
import store from './src/assets/Redux/Store';
import PhysicalFirst from './src/Physical/physicalFirst';
import PhysicalSecond from './src/Physical/PhysicalSecond';
import PhysicalThird from './src/Physical/PhysicalThird';
import PhysicalFourth from './src/Physical/PhysicalFourth';
import PhysicalFifth from './src/Physical/PhysicalFifth';
import PhysicalSixth from './src/Physical/PhysicalSixth';
import PhysicalSeven from './src/Physical/PhysicalSeventh';
import PhysicalEight from './src/Physical/PhysicalEight';
import PhysicalNine from './src/Physical/PhysicalNine';
import PhysicalTenth from './src/Physical/Physicaltenth';
import PhysicalEleven from './src/Physical/PhysicalEleven';
import PhysicalTwelve from './src/Physical/PhysicalTwelve';
import PhysicalThirteen from './src/Physical/PhysicalThirteen';
import PhysicalFourteen from './src/Physical/PhysicalFourteen';
import PhysicalFifteen from './src/Physical/PhysicalFifteen';
import PysicalSixteen from './src/Physical/PhysicalSixteen';
import PhysicalSeventeen from './src/Physical/PhysicalSeventeen';
import PhysicalEighteen from './src/Physical/PhysicalEigteen';
import PhysicalNineteen from './src/Physical/PhysicalNineteen';
import PhysicalTwenty from './src/Physical/PhysicalTwenty';
import PhysicaltwentyOne from './src/Physical/PhysicalTwentyOne';
import PhysicaltwentyTwo from './src/Physical/PhysicalTwentyTwo';
import PysicalTwentyThree from './src/Physical/PhysicalTwentyThree';
import PhysicalTwentyFour from './src/Physical/PhysicalTwentyFour';
import PhysicalTwentyFive from './src/Physical/PhysicalTwentyFive';
import PhysicalTwentySix from './src/Physical/PhysicalTwentySix';
import PhysicalTwentySeven from './src/Physical/PhysicalTwentySeven';
import PhysicalTwentyEight from './src/Physical/PhysicalTwentyEight';
import PhysicalTwentyNine from './src/Physical/PhysicaltwentyNine';
import PhysicalThirty from './src/Physical/PhysicalThirty';
import PhysicalThirtyOne from './src/Physical/PhysicalThirtyOne';
import PhysicalThirtyTwo from './src/Physical/PhysicalThirtyTwo';
import Home from './src/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reports from './src/Reports';
import Test from './src/Test';
import Advice from './src/Advice';
import {View, TouchableOpacity, Image, Text, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PsychlogicalNewThird from './src/Psychological/PsychlogicalNewThird';
import PsychlogicalNewForth from './src/Psychological/PsychlogicalNewForth';
import PsychlogicalNewFifth from './src/Psychological/PsychlogicalNewFifth';
import PsychlogicalNewSixth from './src/Psychological/PsychlogicalNewSixth';
import Psychlogical14 from './src/Psychological/Psychlogical14';
import Psychlogical15 from './src/Psychological/Psychlogical15';
import Psychlogical16 from './src/Psychological/Psychlogical16';
import Psychlogical17 from './src/Psychological/Psychlogical17';
import Psychlogical18 from './src/Psychological/Psychlogical18';
import Psychological20 from './src/Psychological/Psychlogical20';
import Psychological21 from './src/Psychological/Psychlogical21';
import Psychological22 from './src/Psychological/Psychological22';
import Psychological23 from './src/Psychological/Psychological23';
import Psychological24 from './src/Psychological/Psychological24';
import Psychological25 from './src/Psychological/Psychological25';
import Psychlogical26 from './src/Psychological/Psychological26';
import Psychlogical27 from './src/Psychological/Psychlogical27';
import Psychlogical28 from './src/Psychological/Psychlogical28';
import Psychlogical29 from './src/Psychological/Psychlogical29';
import Psychlogical30 from './src/Psychological/Psychlogical30';
import SleepTest1 from './src/SleepTest/SleepTest1';
import SleepTest2 from './src/SleepTest/SleepTest2';
import SleepTest3 from './src/SleepTest/SleepTest3';
import SleepTest4 from './src/SleepTest/SleepTest4';
import SleepTest5 from './src/SleepTest/SleepTest5';
import SleepTest6 from './src/SleepTest/SleepTest6';
import SleepTest7 from './src/SleepTest/SleepTest7';
import SleepTest8 from './src/SleepTest/SleepTest8';
import SleepTest9 from './src/SleepTest/SleepTest9';
import SleepTest10 from './src/SleepTest/SleepTest10';
import SleepTest11 from './src/SleepTest/SleepTest11';
import SleepTest12 from './src/SleepTest/SleepTest12';
import SleepTest13 from './src/SleepTest/SleepTest13';
import SleepTest14 from './src/SleepTest/SleepTest14';
import SleepTest15 from './src/SleepTest/SleepTest15';
import SleepTest16 from './src/SleepTest/SleepTest16';
import SleepTest17 from './src/SleepTest/SleepTest17';
import SleepTest18 from './src/SleepTest/SleepTest18';
import PhysicalActivity1 from './src/PhysicalActivity/PhysicalActivity1';
import PhysicalActivity2 from './src/PhysicalActivity/PhysicalActivity2';
import PhysicalActivity3 from './src/PhysicalActivity/PhysicalActivity3';
import PhysicalActivity4 from './src/PhysicalActivity/PhysicalActivity4';
import PhysicalActivity5 from './src/PhysicalActivity/PhysicalActivity5';
import PhysicalActivity6 from './src/PhysicalActivity/PhysicalActivity6';
import PhysicalActivity7 from './src/PhysicalActivity/PhysicalActivity7';
import PhysicalActivity8 from './src/PhysicalActivity/PhysicalActivity8';
import PhysicalActivity9 from './src/PhysicalActivity/PhysicalActivity9';
import StressTest1 from './src/StressTest/StressTest1';
import StressTest2 from './src/StressTest/StressTest2';
import StressTest3 from './src/StressTest/StressTest3';
import StressTest4 from './src/StressTest/StressTest4';
import StressTest5 from './src/StressTest/StressTest5';
import StressTest6 from './src/StressTest/StressTest6';
import StressTest7 from './src/StressTest/StressTest7';
import StressTest8 from './src/StressTest/StressTest8';
import StressTest9 from './src/StressTest/StressTest9';
import StressTest10 from './src/StressTest/StressTest10';
import TestScreen from './src/Test';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Card"
            component={Card}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="CardTest"
            component={CardTest}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="SleepTestNavigator"
            component={SleepTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="StressTestNavigator"
            component={StressTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="PhysicalActivityTestNavigator"
            component={PhysicalActivityTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="PhysicalTestNavigator"
            component={PhysicalTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="PsychologicalTestNavigator"
            component={PsychologicalTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="PrakiriTestNavigator"
            component={PrakiriTestNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        bottom: 0,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1,
        width: Platform.OS == 'web' ? 480 : wp('100%'),
        alignSelf: 'center',
        backgroundColor: '#fff',
        height: 60,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let showlabel = '';
        let iconNm = '';
        if (label == 'Home') {
          showlabel = 'Home';

          {
            isFocused
              ? (iconNm = require('../reactnativeweb/src/assets/icons/home.png'))
              : (iconNm = require('../reactnativeweb/src/assets/icons/homeWhite.png'));
          }
        }
        if (label == 'Reports') {
          showlabel = 'Reports';

          {
            isFocused
              ? (iconNm = require('../reactnativeweb/src/assets/icons/medicalBlack.png'))
              : (iconNm = require('../reactnativeweb/src/assets/icons/medical_information_black_24dp1.png'));
          }
        }

        if (label == 'TestScreen') {
          showlabel = 'TestScreen';

          {
            isFocused
              ? (iconNm = require('../reactnativeweb/src/assets/icons/Group26086767.png'))
              : (iconNm = require('../reactnativeweb/src/assets/icons/image147.png'));
          }
        }

        if (label == 'Advice') {
          showlabel = 'Advice';
          {
            isFocused
              ? (iconNm = require('../reactnativeweb/src/assets/icons/Group26086773.png'))
              : (iconNm = require('../reactnativeweb/src/assets/icons/Advice.png'));
          }
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8,
            }}
            key={route.key}>
            {isFocused ? (
              <View
                style={{
                  borderTopColor: '#000000',
                  borderTopWidth: 1,
                  width: wp(12),

                  paddingBottom: hp(1.8),
                }}
              />
            ) : (
              <View
                style={{
                  width: wp(12),
                  paddingBottom: hp(1.8),
                }}
              />
            )}
            <Image
              source={iconNm}
              style={{
                marginRight: 40,
                marginLeft: 40,
                resizeMode: 'contain',
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: '#323232',
                fontSize: 12,
                fontFamily: isFocused ? 'Poppins-SemiBold' : 'Poppins-Regular',
              }}>
              {showlabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Reports"
        options={{
          headerShown: false,
        }}
        component={Reports}
      />
      <Tab.Screen
        name="TestScreen"
        options={{
          headerShown: false,
        }}
        component={TestScreen}
      />
      <Tab.Screen
        name="Advice"
        options={{
          headerShown: false,
        }}
        component={Advice}
      />
    </Tab.Navigator>
  );
}

const SleepTestStack = createNativeStackNavigator();

const SleepTestNavigator = () => {
  return (
    <SleepTestStack.Navigator>
      <SleepTestStack.Screen
        name="SleepTest1"
        component={SleepTest1}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest2"
        component={SleepTest2}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest3"
        component={SleepTest3}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest4"
        component={SleepTest4}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest5"
        component={SleepTest5}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest6"
        component={SleepTest6}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest7"
        component={SleepTest7}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest8"
        component={SleepTest8}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest9"
        component={SleepTest9}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest10"
        component={SleepTest10}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest11"
        component={SleepTest11}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest12"
        component={SleepTest12}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest13"
        component={SleepTest13}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest14"
        component={SleepTest14}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest15"
        component={SleepTest15}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest16"
        component={SleepTest16}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest17"
        component={SleepTest17}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <SleepTestStack.Screen
        name="SleepTest18"
        component={SleepTest18}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </SleepTestStack.Navigator>
  );
};

const StressTestStack = createNativeStackNavigator();

const StressTestNavigator = () => {
  return (
    <StressTestStack.Navigator>
      <StressTestStack.Screen
        name="StressTest1"
        component={StressTest1}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest2"
        component={StressTest2}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest3"
        component={StressTest3}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest4"
        component={StressTest4}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest5"
        component={StressTest5}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest6"
        component={StressTest6}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest7"
        component={StressTest7}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest8"
        component={StressTest8}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest9"
        component={StressTest9}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StressTestStack.Screen
        name="StressTest10"
        component={StressTest10}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </StressTestStack.Navigator>
  );
};

const PhysicalActivityTestStack = createNativeStackNavigator();

const PhysicalActivityTestNavigator = () => {
  return (
    <PhysicalActivityTestStack.Navigator>
      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity1"
        component={PhysicalActivity1}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity2"
        component={PhysicalActivity2}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity3"
        component={PhysicalActivity3}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity4"
        component={PhysicalActivity4}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity5"
        component={PhysicalActivity5}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity6"
        component={PhysicalActivity6}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity7"
        component={PhysicalActivity7}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity8"
        component={PhysicalActivity8}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PhysicalActivityTestStack.Screen
        name="PhysicalActivity9"
        component={PhysicalActivity9}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </PhysicalActivityTestStack.Navigator>
  );
};

const PhysicalTestStack = createNativeStackNavigator();

const PhysicalTestNavigator = () => {
  return (
    <PhysicalTestStack.Navigator>
      <PhysicalTestStack.Screen
        name="PhysicalFirst"
        component={PhysicalFirst}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalSecond"
        component={PhysicalSecond}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalThird"
        component={PhysicalThird}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalFourth"
        component={PhysicalFourth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalFifth"
        component={PhysicalFifth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalSixth"
        component={PhysicalSixth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalSeven"
        component={PhysicalSeven}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalEight"
        component={PhysicalEight}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalNine"
        component={PhysicalNine}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTenth"
        component={PhysicalTenth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalEleven"
        component={PhysicalEleven}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwelve"
        component={PhysicalTwelve}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalThirteen"
        component={PhysicalThirteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalFourteen"
        component={PhysicalFourteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalFifteen"
        component={PhysicalFifteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PysicalSixteen"
        component={PysicalSixteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalSeventeen"
        component={PhysicalSeventeen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalEighteen"
        component={PhysicalEighteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalNineteen"
        component={PhysicalNineteen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwenty"
        component={PhysicalTwenty}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicaltwentyOne"
        component={PhysicaltwentyOne}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicaltwentyTwo"
        component={PhysicaltwentyTwo}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PysicalTwentyThree"
        component={PysicalTwentyThree}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentyFour"
        component={PhysicalTwentyFour}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentyFive"
        component={PhysicalTwentyFive}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentySix"
        component={PhysicalTwentySix}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentySeven"
        component={PhysicalTwentySeven}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentyEight"
        component={PhysicalTwentyEight}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalTwentyNine"
        component={PhysicalTwentyNine}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalThirty"
        component={PhysicalThirty}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalThirtyOne"
        component={PhysicalThirtyOne}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PhysicalTestStack.Screen
        name="PhysicalThirtyTwo"
        component={PhysicalThirtyTwo}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </PhysicalTestStack.Navigator>
  );
};
const PsychologicalTestStack = createNativeStackNavigator();

const PsychologicalTestNavigator = () => {
  return (
    <PsychologicalTestStack.Navigator>
      <PsychologicalTestStack.Screen
        name="PsychlogicalFirst"
        component={PsychlogicalFirst}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychlogicalSecond"
        component={PsychlogicalSecond}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="PsychlogicalNewThird"
        component={PsychlogicalNewThird}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychlogicalNewForth"
        component={PsychlogicalNewForth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychlogicalNewFifth"
        component={PsychlogicalNewFifth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychlogicalNewSixth"
        component={PsychlogicalNewSixth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical14"
        component={Psychlogical14}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical15"
        component={Psychlogical15}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychlogical16"
        component={Psychlogical16}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical17"
        component={Psychlogical17}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychlogical18"
        component={Psychlogical18}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychological20"
        component={Psychological20}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychological21"
        component={Psychological21}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychological22"
        component={Psychological22}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychological23"
        component={Psychological23}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychological24"
        component={Psychological24}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="Psychological25"
        component={Psychological25}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical26"
        component={Psychlogical26}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical27"
        component={Psychlogical27}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical28"
        component={Psychlogical28}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical29"
        component={Psychlogical29}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="Psychlogical30"
        component={Psychlogical30}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychlogicalThird"
        component={PsychlogicalThird}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="PsychlogicalFourth"
        component={PsychlogicalFourth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="PsychlogicalFifth"
        component={PsychlogicalFifth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PsychologicalTestStack.Screen
        name="PsychlogicalSixth"
        component={PsychlogicalSixth}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <PsychologicalTestStack.Screen
        name="PsychologicalSeventh"
        component={PsychologicalSeventh}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </PsychologicalTestStack.Navigator>
  );
};

const PrakiriTestStack = createNativeStackNavigator();

const PrakiriTestNavigator = () => {
  return (
    <PrakiriTestStack.Navigator>
      <PrakiriTestStack.Screen
        name="PrakiriTest"
        component={PrakiriTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriSecondTest"
        component={PrakiriSecondTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriThirdTest"
        component={PrakiriThirdTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriFourthTest"
        component={PrakiriFourthTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriFifthTest"
        component={PrakiriFifthTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriSixthTest"
        component={PrakiriSixthTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriSeventhTest"
        component={PrakiriSeventhTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriEigthTest"
        component={PrakiriEigthTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriNinthTest"
        component={PrakiriNinthTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriEvelvenTest"
        component={PrakiriEvelvenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriTwelveTest"
        component={PrakiriTwelveTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriThirteenTest"
        component={PrakiriThirteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriFourteenTest"
        component={PrakiriFourteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriFifteenTest"
        component={PrakiriFifteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriSixteenTest"
        component={PrakiriSixteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriSeventeenTest"
        component={PrakiriSeventeenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriEighteenTest"
        component={PrakiriEighteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <PrakiriTestStack.Screen
        name="PrakiriNineteenTest"
        component={PrakiriNineteenTest}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </PrakiriTestStack.Navigator>
  );
};
export default App;
