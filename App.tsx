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

const App = () => {
  const [count, setCount] = useState(0);

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CardTest}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />
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


export default App;