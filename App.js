import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import { initializeApp } from "firebase/app";

import React, { Component } from "react";
import { View, Text } from "react-native";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/Register";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdDbof7TPb1jch_rVgs01EkHpFWYf4ISM",
  authDomain: "insagram-24dd9.firebaseapp.com",
  projectId: "insagram-24dd9",
  storageBucket: "insagram-24dd9.appspot.com",
  messagingSenderId: "377743933350",
  appId: "1:377743933350:web:7d29229ecd0e167bf99967",
  measurementId: "G-HQJR1NQC5P",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User is logged in</Text>
      </View>
    );
  }
}
export default App;
