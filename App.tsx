import React, { useState } from 'react';
import Card from './src/card';
import CardTest from './src/cardTest';
import PrakiriTest from './src/prakiriTest';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
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
import { Provider } from 'react-redux';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reports from './src/Reports';
import Test from './src/Test';
import Advice from './src/Advice';
import { View, TouchableOpacity, Image, Text, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


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
              gestureEnabled: false
            }}
          />
          <Stack.Screen name="Card" component={Card} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="CardTest" component={CardTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriTest" component={PrakiriTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriSecondTest" component={PrakiriSecondTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriThirdTest" component={PrakiriThirdTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriFourthTest" component={PrakiriFourthTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriFifthTest" component={PrakiriFifthTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriSixthTest" component={PrakiriSixthTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriSeventhTest" component={PrakiriSeventhTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriEigthTest" component={PrakiriEigthTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriNinthTest" component={PrakiriNinthTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriEvelvenTest" component={PrakiriEvelvenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriTwelveTest" component={PrakiriTwelveTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriThirteenTest" component={PrakiriThirteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriFourteenTest" component={PrakiriFourteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriFifteenTest" component={PrakiriFifteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriSixteenTest" component={PrakiriSixteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriSeventeenTest" component={PrakiriSeventeenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriEighteenTest" component={PrakiriEighteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PrakiriNineteenTest" component={PrakiriNineteenTest} options={{
            headerShown: false,
            gestureEnabled: false
          }} />







          <Stack.Screen name="PsychologicalSeventh" component={PsychologicalSeventh} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalFirst" component={PsychlogicalFirst} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalSecond" component={PsychlogicalSecond} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalThird" component={PsychlogicalThird} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalFourth" component={PsychlogicalFourth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalFifth" component={PsychlogicalFifth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PsychlogicalSixth" component={PsychlogicalSixth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />




          <Stack.Screen name="PhysicalFirst" component={PhysicalFirst} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalSecond" component={PhysicalSecond} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalThird" component={PhysicalThird} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalFourth" component={PhysicalFourth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalFifth" component={PhysicalFifth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalSixth" component={PhysicalSixth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalSeven" component={PhysicalSeven} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalEight" component={PhysicalEight} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalNine" component={PhysicalNine} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTenth" component={PhysicalTenth} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalEleven" component={PhysicalEleven} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwelve" component={PhysicalTwelve} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalThirteen" component={PhysicalThirteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalFourteen" component={PhysicalFourteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalFifteen" component={PhysicalFifteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PysicalSixteen" component={PysicalSixteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalSeventeen" component={PhysicalSeventeen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalEighteen" component={PhysicalEighteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalNineteen" component={PhysicalNineteen} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwenty" component={PhysicalTwenty} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicaltwentyOne" component={PhysicaltwentyOne} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicaltwentyTwo" component={PhysicaltwentyTwo} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PysicalTwentyThree" component={PysicalTwentyThree} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentyFour" component={PhysicalTwentyFour} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentyFive" component={PhysicalTwentyFive} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentySix" component={PhysicalTwentySix} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentySeven" component={PhysicalTwentySeven} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentyEight" component={PhysicalTwentyEight} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalTwentyNine" component={PhysicalTwentyNine} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalThirty" component={PhysicalThirty} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalThirtyOne" component={PhysicalThirtyOne} options={{
            headerShown: false,
            gestureEnabled: false
          }} />
          <Stack.Screen name="PhysicalThirtyTwo" component={PhysicalThirtyTwo} options={{
            headerShown: false,
            gestureEnabled: false
          }} />



        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


function MyTabBar({ state , descriptors, navigation }) {

  return (
    <View
      style={{
        flexDirection: 'row',
        bottom: 0,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1,
        width: Platform.OS == 'web' ? 480: wp('100%'),
        alignSelf:'center',
        backgroundColor: '#fff',
        height: 70

      }}>
      {state.routes.map((route : any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;


        const isFocused = state.index === index;
        let showlabel = "";
        let iconNm = "";
        if (label == "Home") {
          showlabel = "Home";

          {isFocused ?
            iconNm = require('../reactnativeweb/src/assets/icons/home.png')
            :
            iconNm = require('../reactnativeweb/src/assets/icons/homeWhite.png');
          }
        }
        if (label == "Reports") {
           showlabel = "Reports";

          {isFocused ?
            iconNm = require('../reactnativeweb/src/assets/icons/medicalBlack.png')
            :
            iconNm = require('../reactnativeweb/src/assets/icons/medical_information_black_24dp1.png')
          }
        }

        if (label == "Test") {
           showlabel = "Test";

          {isFocused ?
            iconNm = require('../reactnativeweb/src/assets/icons/Group26086767.png')
            :
            iconNm = require('../reactnativeweb/src/assets/icons/image147.png')
          }
        }

        if (label == "Advice") {
           showlabel = "Advice";
          {isFocused ?
            iconNm = require('../reactnativeweb/src/assets/icons/Group26086773.png')
            :
            iconNm = require('../reactnativeweb/src/assets/icons/Advice.png')
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
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 8 }}
            key={route.key}
          >
            {/* <Icon size={24} name={iconNm} color={isFocused ? '#FFFFFF' : '#d3d3d3'} />  */}

            <Image source={iconNm} style={{ marginRight: 40, marginLeft: 40, resizeMode: 'contain', width: 30, height: 30 }} />
            <Text style={{ alignSelf: 'center', color:'#323232', fontSize: 13,fontFamily:isFocused ? 'Poppins-SemiBold':'Poppins-Regular', }}>
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
      <Tab.Screen name="Home"
        options={{
          headerShown: false,
        }}
        component={Home} />
      <Tab.Screen name="Reports"
        options={{
          headerShown: false,
        }}
        component={Reports} />
      <Tab.Screen name="Test"
        options={{
          headerShown: false,
        }}
        component={Test} />
      <Tab.Screen name="Advice"
        options={{
          headerShown: false,
        }}
        component={Advice} />
    </Tab.Navigator>
  );
}

export default App;