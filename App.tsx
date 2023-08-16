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
   
        
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};


export default App;