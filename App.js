import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screen/MainScreen';
import SplashScreen from './screen/SplashScreen';
import FishbowlAddScreen from './screen/FishbowlAddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: "환수 달력",
                headerBackVisible: false
              }}
          />
          <Stack.Screen
              name="FishBowlAdd"
              component={FishbowlAddScreen}
              options={{
                title: "어항 추가하기"
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}