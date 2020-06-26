import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
export default function Game({navigation}) {
  return (
    <View>
      <Text>Game</Text>
      <Button
        title="Resultado"
        onPress={() => navigation.navigate("Result")}
      />
    </View>
  );
}
