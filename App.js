import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Levels from "./src/pages/Levels";
import Game from "./src/pages/Game";
import Result from "./src/pages/Result";
import * as Font from "expo-font";
import { useState } from 'react';
import { AppLoading } from 'expo';
import AppProvider from './src/context/app';
const Stack = createStackNavigator();
if (__DEV__) {
  require('react-devtools');
}
const fetchFonts = () =>{
  return Font.loadAsync({
     "eras-bold": require("./src/assets/fonts/ERASBD.ttf"),
  });
}
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return(
      <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)}/>
    )
  } 
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Level">
          <Stack.Screen name="Level" options={{ headerShown: false}} component={Levels} />
          <Stack.Screen name="Game" options={{ headerShown: false}} component={Game} />
          <Stack.Screen name="Result" options={{ headerShown: false}} component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
