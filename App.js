
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase'

import React from 'react';
import LandingScreen from './components/Landing';
import RegisterScreen from './components/Register';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdDbof7TPb1jch_rVgs01EkHpFWYf4ISM",
  authDomain: "insagram-24dd9.firebaseapp.com",
  projectId: "insagram-24dd9",
  storageBucket: "insagram-24dd9.appspot.com",
  messagingSenderId: "377743933350",
  appId: "1:377743933350:web:7d29229ecd0e167bf99967",
  measurementId: "G-HQJR1NQC5P"
};
if(firebase.apps.length === 0){
  firebase.initi
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


