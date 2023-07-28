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

const App = () => {
  const [count, setCount] = useState(0);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Card}
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
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;