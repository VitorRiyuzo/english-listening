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
  //useEffect(() => {
    // Font.loadAsync({
    //   "eras-bold": require("./src/assets/fonts/ERASBD.ttf"),
    // });
  //})
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return(
      <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)}/>
    )
  } 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Level" component={Levels} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
